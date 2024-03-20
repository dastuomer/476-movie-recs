//This file authorizes account creation and adds it to the DB
import User from "../../db/User";
import connect from '../../db/dbconnect';
import { NextResponse } from "next/server";

//Using POST method for sending info
export const POST = async (request) => {
    const {email, username, password } = await request.json();
    //Connect to the DB
    await connect();

    //Queries the DB to see if the username or email are in use, functions below return errors if they exist.
    const existEmail = await User.findOne({email});
    const existUsername = await User.findOne({username});

    if (existEmail) {
        return new NextResponse("Email in use.", {status: 400});
      }

      if (existUsername) {
        return new NextResponse("Username in use.", {status: 400});
      }

    //Creates new DB entry with info from signup page
    const newUser = new User({
        email,
        username,
        password,
    });
    try{
        //Sends info to the DB and gives a success status
        await newUser.save();
        return new NextResponse("Account Created!", {status: 200});
    }
    catch (err){
        return new NextResponse(err, {status: 500})
    }
    
}
