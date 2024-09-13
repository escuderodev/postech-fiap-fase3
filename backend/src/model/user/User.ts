import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    // id: {type: String},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
})

export default mongoose.model("User", userSchema)