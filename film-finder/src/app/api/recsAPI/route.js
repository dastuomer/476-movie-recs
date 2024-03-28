import connectMongoDB from "@/app/utils/libs/mongodb";
import viewMoviesModel from "@/app/models/viewMovies";
import { NextResponse } from "next/server";

export async function GET(request) {

    try {
        const search = request.nextUrl.searchParams.get("name");
        if (!search) { throw new Error }
        await connectMongoDB();
        const movieInfo = await viewMoviesModel.findOne({$or: [{title: search}, {Title_Year: search}]})
        return NextResponse.json({ movieInfo });
    } catch (error) {
        return NextResponse.json(error);
    }

}