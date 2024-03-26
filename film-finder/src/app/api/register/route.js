//This file authorizes account creation and adds it to the DB
import User from "../../models/User";
import connect from '../../utils/dbconnect';
import { NextResponse } from "next/server";

//Using POST method for sending info
export const POST = async (request) => {
    const {email, username, password} = await request.json();
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

    const accounts = await User.find();
    const userid = Object.keys(accounts).length.toString();
    const pfp = "https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg";
    const banner = "https://image.cnbcfm.com/api/v1/image/104768589-movies-anywhere.JPG?v=1507816437&w=1920&h=1080";
    const bio = "Default bio";
    const blank = "";
    const blanklink = "https://www.tarkett-me.com/media/img/M/THH_25094225_25187225_001.jpg";

    const newUser = new User({
        userid: userid,
        email: email,
        username: username,
        password: password,
        pfp: pfp,
        banner: banner,
        bio: bio,
        genres: blank,
        actor: blanklink,
        director: blanklink,
        soundtrack: blanklink,
        character: blanklink,
        favmovie: blank,
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
