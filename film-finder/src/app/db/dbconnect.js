//TThis file is used for establishing mongoose connection, which are used so far for CLIENT-SIDE DB CONNECTIONS
import mongoose from "mongoose";

const connect = async () => {
    //Checks if the user is already logged in
    if (mongoose.connections[0].readyState) return;
    console.log(process.env.MONGO_DB);
    try {
        //Establishes connection using mongoose if possible
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB.");
    } catch (error) {
        throw new Error(error);
    }
}
export default connect;