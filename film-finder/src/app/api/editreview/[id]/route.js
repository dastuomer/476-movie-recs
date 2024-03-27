//This route file is for updating a review or making a new one
import reviewMovieModel from "../../../models/reviewMovie";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    //Get info from request
    const {id} = params;
    const {username: username, title: title, review: review, rating: rating, email: email} = await request.json();
    //Connect to DB
    await connect();
    //Checks to see if the review already exists
    const check = await reviewMovieModel.findOne({userEmail: email, movieID: id});
    if (check)
    {
        //If the review exists, it updates the rating and written review
        await reviewMovieModel.findOneAndUpdate({userEmail: email, movieID: id}, {review: review, rating: rating});
        return NextResponse.json({message: "Updated!"}, {status: 200});
    }
    else
    {
        //Creates new database object for the new review
        const newReview = new reviewMovieModel({
            userEmail: email,
            movieID: id,
            username: username,
            review: review,
            rating: rating,
        });
        //Saves new database entry
        await newReview.save();
        return NextResponse.json({message: "Review Posted!"}, {status: 200});
    }
    
}