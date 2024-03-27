import mongoose, { Schema } from "mongoose";

const reviewMovieSchema = new Schema({
    userEmail: String,
    movieID: String,
    username: String,
    rating: Number,
    review: String
});

const reviewMovieModel = mongoose.models.moviereviewinfos || mongoose.model("moviereviewinfos", reviewMovieSchema);

export default reviewMovieModel;