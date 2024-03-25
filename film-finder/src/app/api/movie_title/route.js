// This is the API for GETting a movie title from a search bar.
import Movie from "../../models/Movie";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";


export async function GET(movie_title) {
    movie_title = "Transformers";
    await connect();
    const movies = await Movie.findOne({title: movie_title});
    return NextResponse.json({ movies });
}
