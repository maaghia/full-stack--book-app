const User = require('../models/User');

//login the user
const login = (req, res) => {
    res.send('from login controller fct')
}


//signup the user
const signup = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.signup(email, password)
        res.status(200).json();
    } catch (error) {
        rs.status(400).json(error);
    }
}

module.exports = {login, signup};