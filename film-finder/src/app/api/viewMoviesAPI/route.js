import connectMongoDB from "@/app/utils/libs/mongodb";
import viewMoviesModel from "@/app/models/viewMovies";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectMongoDB();
    const title = request.nextUrl.searchParams.get("title");
    //console.log(title);
    const movieInfo = await viewMoviesModel.findOne({ Title: title })
    console.log(movieInfo)
    return NextResponse.json({ movieInfo });
}