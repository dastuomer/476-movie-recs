//This file authorizes account creation and adds it to the DB
import Movie from "../../models/Movie";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

//Using POST method for sending info
export const GET = async (request) => {
    const {title} = await request.json();
    //Connect to the DB
    await connect();

    //Queries the DB to see if the username or email are in use, functions below return errors if they exist.
    const existMovie = await Movie.findOne({title});

    try{
        //Sends info to the DB and gives a success status
        if (existMovie)
        {
            return new NextResponse("Movie found!", {status: 200});
        }
        
    }
    catch (err){
        return new NextResponse("Movie not found.", {status: 400});
    }
}
