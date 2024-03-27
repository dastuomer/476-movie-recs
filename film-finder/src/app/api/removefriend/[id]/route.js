import User from "../../../models/User";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function DELETE(request, {params}) {
    const {username} = await request.json();
    const {id} = params;
    await connect();
    await User.findOneAndUpdate({email: id}, { $pull: {friends: username}});
    return NextResponse.json({message: "Deleted!"}, {status: 200});
}