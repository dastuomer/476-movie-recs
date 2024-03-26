//File that defines what the user database entry will look like. Specifies datatype, uniqueness, and requiredness of each element
import mongoose from "mongoose";
//import { Link } from "react-bootstrap/lib/Navbar";

const {Schema} = mongoose;

//Defines the user schema (needs a email, username, and password)
const userSchema = new Schema(
    {
        userid: {
            type: String,
            unique: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            unique: false,
            required: true,
        },
        pfp: {
            type: String,
            required: false,
        },
        banner: {
            type: String,
            required: false,
        },
        bio: {
            type: String,
            required: false,
        },
        genres: {
            type: String,
            required: false,
        },
        actor: {
            type: String,
            required: false,
        },
        director: {
            type: String,
            required: false,
        },
        soundtrack: {
            type: String,
            required: false,
        },
        character: {
            type: String,
            required: false,
        },
        favmovie: {
            type: String,
            required: false,
        }
    }
);
//Exports the model for use in other parts of the code.
export default mongoose.models.User || mongoose.model("User", userSchema);
