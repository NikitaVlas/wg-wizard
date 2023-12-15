import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

//Register user
export const register = async (req, res) => {
    try {
        const {username, password} = req.body
        const isUsed = await User.findOne({username})

        if (isUsed) {
            return res.json({
                message: 'This username already exists.'
            })
        }

        //password hashing complexity
        const salt = bcrypt.genSaltSync(10)

        //password hashing
        const hash = bcrypt.hashSync(password, salt)

        //creating a new user
        const newUser = new User({
            username,
            password: hash
        })

        //saving user in DB
        await newUser.save()

        res.json({
            newUser, message: 'Registration completed successfully.'
        })

    } catch (error) {
        res.json({
            message: 'Error when creating a user.'
        })
    }
}

//Login user
export const login = async (req, res) => {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})

        if (!user) {
            return res.json({
                message: 'User does not exist.'
            })
        }

        //password comparison
        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: 'Incorrect password.'
            })
        }
        //check whether we are logged in or not
        const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        res.json({
            token, user, message: 'you are logged'
        })

    } catch (error) {
        res.json({
            message: 'Authorization error.'
        })
    }
}
//Get me
export const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.userId)

        if (!user) {
            return res.json({
                message: 'User does not exist.'
            })
        }

        const token = jwt.sign({
                id: user._id
            }, process.env.JWT_SECRET,
            {expiresIn: '30d'}
        )

        res.json({
            user,
            token
        })

    } catch (error) {
        return res.json({
            message: 'No access.'
        })
    }
}