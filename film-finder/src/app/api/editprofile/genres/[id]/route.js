import User from "../../../../models/User";
import connect from '../../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {genres} = await request.json();
    const {id} = params;
    await connect();
    await User.findOneAndUpdate({email: id}, {genres: genres});
    return NextResponse.json({message: "Updated!"}, {status: 200});
}