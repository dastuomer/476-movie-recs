//This route file is for deleting user reviews
import reviewMovieModel from "../../../models/reviewMovie";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function DELETE(request, {params}) {
    //Get info from request
    const {id} = params;
    const {email} = await request.json();
    //Connect to DB
    await connect();
    //Check to see if the review exists
    const check = await reviewMovieModel.findOne({userEmail: email, movieID: id});
    if (check)
    {
        //Deletes review, returns message
        await reviewMovieModel.deleteOne({userEmail: email, movieID: id});
        return NextResponse.json({message: "Deleted!"}, {status: 200});
    }
    else
    {
        //Returns error message
        return NextResponse.json({message: "Could not find review!"}, {status: 400});
    }
    
}