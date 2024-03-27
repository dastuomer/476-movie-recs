//This route file is for updating the user's friend info
import User from "../../models/User";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function GET(request) {
    //Get info from request
    const username = request.nextUrl.searchParams.get("request");
    //Connect to DB
    await connect();
    //Get the user info and return it
    const info = await User.findOne({username: username});
    return NextResponse.json(info);
}
