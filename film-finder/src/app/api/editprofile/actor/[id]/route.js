//This route file is for updating the user's favourite actor
import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {actor} = await request.json();
    const {id} = params;
    //Connect to DB
    await connect();
    //Update database
    await User.findOneAndUpdate({email: id}, {actor: actor});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}