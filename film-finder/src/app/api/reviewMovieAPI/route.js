//This route file is for getting the user reviews to populate on a movie's page
import connectMongoDB from "@/app/utils/libs/mongodb";
import reviewMovieModel from "@/app/models/reviewMovie";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        const email = request.nextUrl.searchParams.get("email");
        if (!email) { throw new Error }
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        const reviewInfo = await reviewMovieModel.findOne({ movieID: id, userEmail: email })
        return NextResponse.json({ reviewInfo });
    } catch (error) {
        const movieID = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        const userEmailList = await reviewMovieModel.find({ movieID: movieID }, "userEmail");
        return NextResponse.json({ userEmailList });
    }
}
