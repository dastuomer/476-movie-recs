//This route file is for updating the user's friend info by removing a friend
import User from "../../../models/User";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function DELETE(request, {params}) {
    //Gets information from request
    const {username} = await request.json();
    const {id} = params;
    //Connects to DB
    await connect();
    //Removes element from friends array in user database entry
    await User.findOneAndUpdate({email: id}, { $pull: {friends: username}});
    return NextResponse.json({message: "Deleted!"}, {status: 200});
}