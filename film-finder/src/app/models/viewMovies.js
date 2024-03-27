import mongoose, { Schema } from "mongoose";

const viewMoviesSchema = new Schema({


});

const viewMoviesModel = mongoose.models.films || mongoose.model("films", viewMoviesSchema);

export default viewMoviesModel;