import User from "../../models/User";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function GET(request) {
    await connect();
    const username = request.nextUrl.searchParams.get("request");
    const info = await User.findOne({username: username});
    return NextResponse.json(info);
}
