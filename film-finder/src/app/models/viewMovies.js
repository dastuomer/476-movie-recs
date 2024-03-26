import mongoose, { Schema } from "mongoose";

const viewMoviesSchema = new Schema({
    _id: String,
    genre: String,
    IMDBscore: Number,
    poster: String,
    title: String
});

const viewMoviesModel = mongoose.models.movieinfos || mongoose.model("movieinfos", viewMoviesSchema);

export default viewMoviesModel;