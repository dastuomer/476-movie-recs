//This route file is for updating the user's favourite movie character
import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {character} = await request.json();
    const {id} = params;
    //Connect to DB
    await connect();
    //Updates database
    await User.findOneAndUpdate({email: id}, {character: character});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}