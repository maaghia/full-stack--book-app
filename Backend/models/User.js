const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type: String,
        required: true, 
        unique: true,
    },
    password:{
        type: String,
        required: true, 
    }, 
}, {timestamps: true});

    UserSchema.statics.signup = async function(email, password) {
    
        //Validating email and password
        if(!validator.isEmail(email)){
            throw Error("Credentials must be valid")
        }
    
        if(!validator.isStrongPassword(password)){
            throw Error("Credentials must be valid")
        }
    
        const emailExists = await this.findOne({email});
    
        if(emailExists) {
            throw Error("Email already exists!")
        }
    
        //salt
        const salt = await bcrypt.genSalt(12)
        //hashed password
        const hashedPassword = await bcrypt.hash(password, salt)
    
        const user = await this.create({email, password: hashedPassword})
    
        return user
    }
    
    UserSchema.statics.login = async function(email, password) {
    
      //Validating email and password
    
      if(!email || !password) {
        throw Error('You must provide your credentials to login!')
      }
    
      if(!validator.isEmail(email)){
          throw Error("Credentials must be valid")
      }
    
      const user = await this.findOne({email});
    
      if(!user) {
          throw Error("Email dosn't exist!")
      }
    
      const correctPassword = await bcrypt.compare(password, user.password)
      if(!correctPassword) {
        throw Error('Incorrect Credentials')
      }
    
      return user
    }
    
    module.exports = mongoose.model("User", UserSchema);