// This is the API for GETting a movie title from a search bar.
import Movie from "../../models/Movie";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

export async function GET(request) {
    //Get info from request
    const search = request.nextUrl.searchParams.get("request");
    //Connect to DB
    await connect();
    //Gets movie title and returns it
    const movies = await Movie.find({title: search}); 
    return NextResponse.json({ movies });
}
