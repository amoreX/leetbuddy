import userModel from '../Models/userModel'
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
import { connecting } from '../connect/route'

export const POST = async(req) => {
    const { email, password } = await req.json();
    await connecting();
    try{
        // Checking if user already exists
        const checkingUser = await userModel.findOne({ email: email })
        if (checkingUser) {
            //Authenticate user_pass
            const isMatch = await bcrypt.compare(password,checkingUser.password);
            if (isMatch){
                // return res.status(400).send('User Authenticated')
                return Response.json({
                    Message: 'User Authenticated Successfully',
                    userId: checkingUser._id,
                    friends:checkingUser.friends,
                    authStatus: "True"
                })
            }
            else{
                return Response.json({
                    Message: 'Invalid password',
                    authStatus: "False"
                })
            }
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const userInfo = {
            username: '',
            email: email,
            password: hashedPassword,
            friends: []
        }

        const newUser = new userModel(userInfo)

        await newUser.save()

        return Response.json({
            Message: 'User Created Successfully',
            userId: newUser._id,
            authStatus: "True"
        })
    }
    catch(err) {
        console.log(err)
        return Response.json({
            Message:"Internal server error"
        })
    }
}
