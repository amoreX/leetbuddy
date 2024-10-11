import userModel from '../Models/userModel'
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
import { connecting } from '../connect/route'

export const POST=async(req,res)=>{
    const {userId}=await req.json();
    await connecting();
    try{
        const findingUser = await userModel.findOne({ _id: new mongoose.Types.ObjectId(userId)  });
        if(findingUser){
            return Response.json({
                Message: 'Fetched Friends Successfully',
                friends:findingUser.friends
            });
        }
        

    }catch(err){
        console.log(err);
        return Response.json({
            Message:"Error hogaya"
        });
    }
};