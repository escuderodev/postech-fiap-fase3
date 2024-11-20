import mongoose, { Date } from "mongoose"

export interface IDiscipline extends Document {
    title: string,
    createdAt: Date,
    updatedAt: Date
}

const disciplineSchema = new mongoose.Schema({
    title: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date}
})

export default mongoose.model<IDiscipline>("Discipline", disciplineSchema)