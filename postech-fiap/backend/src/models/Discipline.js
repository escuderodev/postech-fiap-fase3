import mongoose from "mongoose";

const disciplineSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
}, {versionKey: false});

const discipline = mongoose.model("disciplinies", disciplineSchema);

export { discipline, disciplineSchema };