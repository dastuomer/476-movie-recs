import connectMongoDB from "@/app/utils/libs/mongodb";
import reviewMovieModel from "@/app/models/reviewMovie";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        const email = request.nextUrl.searchParams.get("email");
        if (!email) { throw new Error }
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        const reviewInfo = await reviewMovieModel.findOne({ movieTitle: id, userEmail: email })
        //console.log(reviewInfo)
        return NextResponse.json({ reviewInfo });

    } catch (error) {

        const movieID = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        const userEmailList = await reviewMovieModel.find({ movieTitle: movieID }, "userEmail");
        //console.log(userEmailList)
        return NextResponse.json({ userEmailList });
    }
/*
    await connectMongoDB();
    const review1 = new reviewMovieModel({
        userEmail: "muck@gmail.com",
        movieID: '573a1390f29313caabcd4eaf',
        username: "muck",
        rating: 5,
        review: "good"
    })
    console.log(review1)
    await review1.save();
    const review2 = new reviewMovieModel({
        userEmail: "muck@gmail.com",
        movieID: '573a1390f29313caabcd42e8',
        username: "muck",
        rating: 3,
        review: "mid"
    })
    //console.log(review2)
    await review2.save();
    const review3 = new reviewMovieModel({
        userEmail: "muck@gmail.com",
        movieID: '573a1390f29313caabcd516c',
        username: "muck",
        rating: 1,
        review: "bad"
    })
    //console.log(review3)
    await review3.save();
    return NextResponse.json({ message: "reviews saved" });
    */
}
