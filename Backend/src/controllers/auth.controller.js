import userModel from "../model/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'

async function registerUser(req, res) {

    const { username, email, password } = req.body;

    if (password.length < 5) {
        return res.status(400).json({
            message: "Password must be At Least 5 Characters Long",
        });

    }

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    })

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User Already exists",
        });
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashPassword
    })

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }
    })

}

async function loginUser(req, res) {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password are required"
            });
        }

        const userExist = await userModel.findOne({
            email,
        });

        if (!userExist) {
            return res.status(404).json({
                message: "User Not Found. First Create Account"
            });
        }


        const isMatch = await bcrypt.compare(
            password,
            userExist.password
        );


        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        // const token = jwt.sign({
        //     id: user._id,
        // }, process.env.JwtSecret,
        //     { expiresIn: '1d' }
        // )

        // res.cookie("logintoken", token)

        res.status(200).json({

            message: "Login Successfully",

            user: {
                id: userExist._id,
                username: userExist.username,
                email: userExist.email
            },

        });


    } catch (error) {

        console.log(error);

        return res.status(500).json({
            message: "Server Error"
        });

    }
}

export default { registerUser, loginUser };