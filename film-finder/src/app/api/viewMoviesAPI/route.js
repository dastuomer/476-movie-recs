//This route file is for populating the view movies page with all reviewed movies
import connectMongoDB from "@/app/utils/libs/mongodb";
import viewMoviesModel from "@/app/models/viewMovies";
import reviewMovieModel from "@/app/models/reviewMovie";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        if (!id) { throw new Error }
        await connectMongoDB();
        const movieInfo = await viewMoviesModel.findById(id)
        return NextResponse.json({ movieInfo });
    } catch (error) {
        const email = request.nextUrl.searchParams.get("email");
        await connectMongoDB();
        const movieList = await reviewMovieModel.find({ userEmail: email }, "movieID")
        return NextResponse.json({ movieList });
    }

}