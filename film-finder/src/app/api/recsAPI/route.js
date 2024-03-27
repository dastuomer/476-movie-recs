import connectMongoDB from "@/app/utils/libs/mongodb";
import viewMoviesModel from "@/app/models/viewMovies";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        const search = request.nextUrl.searchParams.get("name");
        console.log(search);
        if (!search) { throw new Error }
        await connectMongoDB();
        const movieInfo = await viewMoviesModel.findOne({title: search}, "title poster plot ratings5")
        console.log(movieInfo)
        return NextResponse.json({ movieInfo });
    } catch (error) {
        return NextResponse.json(error);
    }

}