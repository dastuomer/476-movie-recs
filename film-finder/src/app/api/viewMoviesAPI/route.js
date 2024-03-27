import connectMongoDB from "@/app/utils/libs/mongodb";
import viewMoviesModel from "@/app/models/viewMovies";
import reviewMovieModel from "@/app/models/reviewMovie";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        console.log(id);
        if(!id){throw new Error}
        await connectMongoDB();
        const movieInfo = await viewMoviesModel.findById(id)
        console.log(movieInfo)
        return NextResponse.json({ movieInfo });
    } catch (error) {
        const email = request.nextUrl.searchParams.get("email");
        console.log(email)
        await connectMongoDB();
        const movieList = await reviewMovieModel.find({ userEmail: email }, "movieID")
        console.log(movieList)
        return NextResponse.json({ movieList });
    }

}