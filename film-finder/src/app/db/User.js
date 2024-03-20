//File that defines what the user database entry will look like. Specifies datatype, uniqueness, and requiredness of each element
import mongoose from "mongoose";

const {Schema} = mongoose;

//Defines the user schema (needs a email, username, and password)
const userSchema = new Schema(
    {
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
    },
    { timestamps: true }
);
//Exports the model for use in other parts of the code.
export default mongoose.models.User || mongoose.model("User", userSchema);
