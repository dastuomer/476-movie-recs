// This is the API for GETting a movie title from a search bar.
import reviewMovieModel from "../../../models/reviewMovie";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {username: username, title: title, review: review, rating: rating, email: email} = await request.json();
    await connect();
    const check = await reviewMovieModel.findOne({userEmail: email, movieID: id});
    if (check)
    {
        await reviewMovieModel.findOneAndUpdate({userEmail: email, movieID: id}, {review: review, rating: rating});
        return NextResponse.json({message: "Updated!"}, {status: 200});
    }
    else
    {
        const newReview = new reviewMovieModel({
            userEmail: email,
            movieID: id,
            username: username,
            review: review,
            rating: rating,
        });
        await newReview.save();
        return NextResponse.json({message: "Review Posted!"}, {status: 200});
    }
    
}