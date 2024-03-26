// This is the API for GETting a movie title from a search bar.
import Movie from "../../models/Movie";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function GET(request) {
    await connect();
    const search = request.nextUrl.searchParams.get("request");
    const movies = await Movie.find({title: search}, {limit: 10});
    return NextResponse.json({ movies });
}


// Below is for a single movie title
{/*
export async function GET(movie_title) {
    movie_title = "Transformers";
    await connect();
    const movies = await Movie.findOne({title: movie_title});
    return NextResponse.json({ movies });
}

*/}
//