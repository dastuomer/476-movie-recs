//This route file is for editing a user's friend list
import User from "../../../models/User";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {username} = await request.json();
    const {id} = params;
    //Connect to DB
    await connect();
    //Check to see if the username exists
    const check = await User.findOne({username: username});
    if (check)
    {
        //Adds friend's username to the friends array
        await User.findOneAndUpdate({email: id}, { $push: {friends: username}});
        return NextResponse.json({message: "Updated!"}, {status: 200});
    }
    else
    {
        //Returns error message if no user found
        return NextResponse.json({message: "Could not find username!"}, {status: 400});
    }
    
}