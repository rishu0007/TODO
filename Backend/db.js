const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Rishu571%40@cluster0.p1xqoww.mongodb.net/todoApp")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo = mongoose.model('Todos', todoSchema);

module.exports = {
    todo
}