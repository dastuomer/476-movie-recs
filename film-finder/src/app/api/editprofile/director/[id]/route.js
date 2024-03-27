//This route file is for updating the user's favourite director
import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {director} = await request.json();
    const {id} = params;
    //Connect to DB
    await connect();
    //Updates database
    await User.findOneAndUpdate({email: id}, {director: director});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}