//This route file is for updating the user's bio
import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {bio} = await request.json();
    const {id} = params;
    //Connect to DB
    await connect();
    //Update database
    await User.findOneAndUpdate({email: id}, {bio: bio});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}