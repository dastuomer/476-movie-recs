import reviewMovieModel from "../../../models/reviewMovie";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function DELETE(request, {params}) {
    const {id} = params;
    const {email} = await request.json();
    await connect();
    console.log(email);
    const check = await reviewMovieModel.findOne({userEmail: email, movieID: id});
    if (check)
    {
        await reviewMovieModel.deleteOne({userEmail: email, movieID: id});
        return NextResponse.json({message: "Deleted!"}, {status: 200});
    }
    else
    {
        return NextResponse.json({message: "Could not find review!"}, {status: 400});
    }
    
}