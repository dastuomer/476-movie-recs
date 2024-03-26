import connectMongoDB from "@/app/utils/libs/mongodb";
import reviewMovieModel from "@/app/models/reviewMovie";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        const title = request.nextUrl.searchParams.get("title");
        const email = request.nextUrl.searchParams.get("email");
        if (!email) { throw new Error }
        await connectMongoDB();
        const reviewInfo = await reviewMovieModel.findOne({ movieTitle: title, userEmail: email })
        //console.log(reviewInfo)
        return NextResponse.json({ reviewInfo });

    } catch (error) {

        const movieTitle = request.nextUrl.searchParams.get("title");
        await connectMongoDB();
        const userEmailList = await reviewMovieModel.find({ movieTitle: movieTitle }, "userEmail");
        //console.log(userEmailList)
        return NextResponse.json({ userEmailList });
    }

}


