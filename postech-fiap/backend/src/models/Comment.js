import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    description: {type: String, required: true},
    author: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
})

const comment = mongoose.model("Comment", commentSchema);

export { comment, commentSchema };