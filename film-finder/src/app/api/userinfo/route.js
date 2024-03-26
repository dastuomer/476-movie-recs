import User from "../../models/User";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function GET(request) {
    await connect();
    const email = request.nextUrl.searchParams.get("request");
    const info = await User.findOne({email: email});
    return NextResponse.json({info});
}
