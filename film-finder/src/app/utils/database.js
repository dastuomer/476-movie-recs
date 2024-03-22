//This is for SERVER-SIDE ONLY DATABASE QUERIES. Using these for movie posters on the profile page.
const { MongoClient } = require("mongodb");
import { runDatabaseOperation } from "./databaseConnect";

//Gets a movie poster image link to display
export async function poster(name) {
  //Autofill code, not really neccessary but me and Alex were testing it
  const filter = {
    title: {
      $regex: `${name}`,
      $options: "i",
    },
  };
  //Information used for establishing a connection with mongodb database (uses username and password in the resources chat on Discord)
  const uri =
    "mongodb+srv://476team:FilmFinder!!@filmfinder.sjnushj.mongodb.net/?retryWrites=true&w=majority&appName=FilmFinder";
  async function fetchPosterFromDB(client) {
    const coll = client.db("sample_mflix").collection("movies");
    //Looks for the poster name in the DB
    const cursor = coll.find(filter);
    //Casts as an array since the above is currently a Promise datatype (useless af)
    const pos = await cursor.toArray();
    //Gets the movie poster link from the DB entry
    const myString = pos[0].poster;
    return myString;
  }
  try {
    return await runDatabaseOperation(uri, fetchPosterFromDB);
  } catch (err) {
    // Handle error if needed, or let the caller handle it
    throw err;
  }
}
