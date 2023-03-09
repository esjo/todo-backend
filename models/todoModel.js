import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    }
})

export const todoModel = mongoose.model('todo', todoSchema)
