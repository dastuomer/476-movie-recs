const { MongoClient } = require('mongodb');

export async function poster() 
{
  const uri = "mongodb+srv://476team:FilmFinder!!@filmfinder.sjnushj.mongodb.net/?retryWrites=true&w=majority&appName=FilmFinder";
  const client = new MongoClient(uri);
  var pog;
  try
  {
    await client.connect();
    const db = client.db("film_finder");
    const coll = db.collection("posters");
    const pos = await coll.find({imdbId : 1392190}).toArray();
    const myString = pos[0].Poster;
    return (myString);
  }
  catch(err){console.error(err);}
  finally{await client.close();}
}

