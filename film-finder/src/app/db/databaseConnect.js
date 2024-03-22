const { MongoClient } = require("mongodb");

async function runDatabaseOperation(uri, operation) {
  const client = new MongoClient(uri);
  try {
    //create a connection instance
    await client.connect();
    return await operation(client);
  } catch (err) {
    console.error(err);
    throw err; // Rethrow the error for the calling function to handle
  } finally {
    await client.close();
  }
}

module.exports = { runDatabaseOperation };
