//This route file is for getting the user's info
import User from "../../models/User";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function GET(request) {
    //Get info from request
    const email = request.nextUrl.searchParams.get("request");
    //Connect to DB
    await connect();
    //Get database entry and return it
    const info = await User.findOne({email: email});
    return NextResponse.json({info});
}
