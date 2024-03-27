//This route file is for updating the user's favourite genres
import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {genres} = await request.json();
    const {id} = params;
    //Connect to DB
    await connect();
    //Updates database
    await User.findOneAndUpdate({email: id}, {genres: genres});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}