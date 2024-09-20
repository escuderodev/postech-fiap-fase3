import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    description: {type: String, required: true},
    author: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
})

export default mongoose.model("Comment", commentSchema)