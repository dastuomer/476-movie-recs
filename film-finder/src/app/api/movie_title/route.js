// This is the API for GETting a movie title from a search bar.
import Movie from "../../models/Movie";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function GET() {
    await connect();
    const movies = await Movie.findOne({title: "Miss Jerry"});
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