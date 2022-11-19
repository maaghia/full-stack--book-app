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
})
UserSchema.statics.signup = async function() {
    //validatimg email and pwd 
    if(!validator.isEmail(email)){
        throw Error ("crentials mst be valid")
    }

/*     const user = await this.findOne({email});
    if(!user){

    } */

    const emailExists = await this.findOne({email});
    if (!emailExists){
        throw Error ("Email does't exist")
    }
    //salt
    const salt = await bcrypt.genSalt(12);
    //hashed pwd
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({email, password: hashedPassword})
    return user;
}

module.exports = mongoose.model('User', UserSchema);