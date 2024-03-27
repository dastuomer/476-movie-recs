//File for defining the schema reviewMovieModel, which is used to access the collection moviereviewinfos in the database
import mongoose, { Schema } from "mongoose";

//Definition of the schema
const reviewMovieSchema = new Schema({
    userEmail: String,
    movieID: String,
    username: String,
    rating: Number,
    review: String
});

//Exported for use in other pages
const reviewMovieModel = mongoose.models.moviereviewinfos || mongoose.model("moviereviewinfos", reviewMovieSchema);
export default reviewMovieModel;