//File that defines what the user database entry will look like. Specifies datatype, uniqueness, and requiredness of each element
import mongoose from "mongoose";

const {Schema} = mongoose;

//Defines the user schema (needs a email, username, and password)
const movieSchema = new Schema(
    {
        plot: {
            type: String,
            unique: true,
            required: true,
        }
    }
        
);
//Exports the model for use in other parts of the code.

const Movie = mongoose.models.film_poster || mongoose.model("film_poster", movieSchema)
export default Movie;