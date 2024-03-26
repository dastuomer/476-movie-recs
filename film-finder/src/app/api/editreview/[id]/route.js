// This is the API for GETting a movie title from a search bar.
import reviewMovieModel from "../../../models/reviewMovie";
import connect from '../../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const {id} = params;
    const {username: username, title: title, review: review} = await request.json();
    await connect();
    const check = await reviewMovieModel.findOneAndUpdate({userEmail: id}, {movieTitle: title});
    if (check)
    {
        await reviewMovieModel.findOneAndUpdate({userEmail: id, movieTitle: title}, {review: review});
        return NextResponse.json({message: "Updated!"}, {status: 200});
    }
    else
    {
        const newReview = new reviewMovieModel({
            userEmail: id,
            movieTitle: title,
            username: username,
            review: review,
        });
        await newReview.save();
        return NextResponse.json({message: "Review Posted!"}, {status: 200});
    }
    
}