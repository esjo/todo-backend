import { todoModel } from "../models/todoModel.js";

const getTodo = async(req,res) => {
    const todo = await todoModel.find()
    res.send(todo);
}

const saveTodo = async(req,res) => {
    const {text} = req.body

    todoModel.create({text})
    .then((data) => {
        console.log('add success');
        console.log(data);
        res.send(data)
    })

}

const updateTodo = async(req,res) => {
    const {_id, text} = req.body;

    todoModel.findByIdAndUpdate(_id, {text})
    .then(() => res.send("updated successfully"))
    .catch((error) => console.log(error))
}

const deleteTodo = async(req,res) => {
    const {_id} = req.body;

    todoModel.findByIdAndDelete(_id)
    .then(() => res.send("deleted successfully"))
    .catch((error) => console.log(error))
}

export{
    getTodo,
    saveTodo,
    updateTodo,
    deleteTodo
}