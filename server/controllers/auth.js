import User from '../models/User.js'
import bcrypt from 'bcryptjs'

//Register user
export const register = async (req, res) => {
    try {
        const { username, password } =  req.body
        const isUsed = await User.findOne({username})

        if(isUsed) {
            return res.json({
                message: 'This username already exists.'
            })
        }

        //password hashing complexity
        const salt = bcrypt.genSaltSync(10)

        //password hashing
        const hash = bcrypt.hashSync(password, salt)

        //creating a new user
        const newUser = new User ({
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

    }catch (error) {

    }
}
//Get me
export const getMe = async (req, res) => {
    try {

    }catch (error) {

    }
}