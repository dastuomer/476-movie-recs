//This route file is for updating the user's banner image
import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {banner} = await request.json();
    const {id} = params;
    //Connect to DB
    await connect();
    //Updates database
    await User.findOneAndUpdate({email: id}, {banner: banner});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}