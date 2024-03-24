//File that defines what the user database entry will look like. Specifies datatype, uniqueness, and requiredness of each element
import mongoose from "mongoose";
//import { Link } from "react-bootstrap/lib/Navbar";

const {Schema} = mongoose;

//Defines the user schema (needs a email, username, and password)
const movieSchema = new Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true,
        }
    },
    { collection: "movie_dataset_imdb"}
        
);
//Exports the model for use in other parts of the code.
export default mongoose.models.Movie;