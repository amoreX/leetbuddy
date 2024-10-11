import userModel from '../Models/userModel'
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
import { connecting } from '../connect/route'

export const POST = async (req, res) => {
    const { friendId, userId } = await req.json();
    await connecting();
    try {
        const data = await userModel.updateOne(
            { _id: userId },
            { $push: { friends: friendId } }
        );

        if (data.modifiedCount === 0) {
            return Response.json({
                Message:"Error hogaya"
            });
        }

        return Response.json({
            Message:"friend added!"
        });
    } catch (err) {
        console.log(err);
        return Response.json({
            Message:"Error hogaya"
        });
    }
};