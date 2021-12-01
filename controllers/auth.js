const User = require('../models/UserModel')
const jwt = require('jsonwebtoken');
require("dotenv").config();
function generateAccessToken(email) {
    return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '36000s' });
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}

async function SignUp(req, res) {

    try {
        const { email } = req.body

        let user = await User.findOne({
            email,
        });

        if (user) {
            return res.status(400).json({
                success: false,
                msg: "User Already Exists",
            });
        }

        user = new User({
            email,
        });


        await user.save();
        const payload = {
            id: user.id
        };

        const token = generateAccessToken({ payload });
        res.status(200).json({ success: true, token });

    } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }

}

async function Login(req, res) {
    const { email } = req.body
    try {
        let user = await User.findOne({
            email: email
        });
        if (!user)
            return res.status(400).json({
                success: false,
                message: "User Not Exist"
            });

        const payload = {
            id: user.id
        };

        const token = generateAccessToken({ payload });
        res.status(200).json({ success: true, token });

    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error"
        });
    }
}

module.exports = {
    Login: Login,
    SignUp: SignUp,
    authenticateToken: authenticateToken
}