import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: String, required: true},
    discipline: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
})

export default mongoose.model("Post", postSchema)