import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {bio} = await request.json();
    const {id} = params;
    await connect();
    await User.findOneAndUpdate({email: id}, {bio: bio});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}