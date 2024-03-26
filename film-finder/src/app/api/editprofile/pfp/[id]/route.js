import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {pfp} = await request.json();
    const {id} = params;
    await connect();
    await User.findOneAndUpdate({email: id}, {pfp: pfp});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}