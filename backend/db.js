const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://admin:gPM4Ubiqm7r37oJc@cluster0.jgcuqyd.mongodb.net/to-do');

const todoSchema = mongoose.Schema ({
    title: String,
    completion: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = todo;