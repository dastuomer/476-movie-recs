//This route file is for updating the user's favourite soundtrack
import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Gets info from request
    const {soundtrack} = await request.json();
    const {id} = params;
    //Connects to DB
    await connect();
    //Updates database
    await User.findOneAndUpdate({email: id}, {soundtrack: soundtrack});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}