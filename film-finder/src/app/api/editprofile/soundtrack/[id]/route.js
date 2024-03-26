import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {soundtrack} = await request.json();
    const {id} = params;
    await connect();
    await User.findOneAndUpdate({email: id}, {soundtrack: soundtrack});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}