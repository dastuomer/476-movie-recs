import User from "../../../models/User";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {username} = await request.json();
    const {id} = params;
    await connect();
    const check = await User.findOne({username: username});
    if (check)
    {
        await User.findOneAndUpdate({email: id}, { $push: {friends: username}});
        return NextResponse.json({message: "Updated!"}, {status: 200});
    }
    else
    {
        return NextResponse.json({message: "Could not find username!"}, {status: 400});
    }
    
}