import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add your name"],
    },
    email: {
        type: String,
        required: [true, "Please add email"],
        unique: [true, "Email address already taken"],
    },
    phone: {
        type: String,
        required: [true, "Please enter phone"],
    },

}, {timestamps: true,}
);

export default mongoose.model("User", userSchema);