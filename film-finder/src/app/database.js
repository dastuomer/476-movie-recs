const { MongoClient } = require('mongodb');

export async function poster(name) 
{
  const filter = {
    'title': {
      '$regex': `${name}`, 
      '$options': 'i'
    }
  };
  const uri = "mongodb+srv://476team:FilmFinder!!@filmfinder.sjnushj.mongodb.net/?retryWrites=true&w=majority&appName=FilmFinder";
  const client = new MongoClient(uri);
  try
  {
    await client.connect();
    const coll = client.db("sample_mflix").collection("movies");
    const cursor = coll.find(filter);
    const pos = await cursor.toArray();
    //const pos = await coll.find({Title : result}).toArray(); //imdbId : 1392190
    const myString = pos[0].poster;
    return (myString);
  }
  catch(err){console.error(err);}
  finally{await client.close();}
}

