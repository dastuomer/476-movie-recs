//File that defines what the user database entry will look like. Specifies datatype, uniqueness, and requiredness of each element
import mongoose from "mongoose";

const {Schema} = mongoose;

//Defines the movie title schema for the search bar
const movieSchema = new Schema(
    {
        
        Title_Year: {
            type: String,
            unique: true,
            required: true,
        }
    }
        
);

const Movie = mongoose.models.films || mongoose.model("films", movieSchema)
export default Movie;
//Exports the model for use in other parts of the code. 