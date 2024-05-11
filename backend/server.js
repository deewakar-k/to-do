const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const todo = require("./db");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const ParsedPayload = createTodo.safeParse(createPayload);
    if (!ParsedPayload.success){
        res.status(411).json({
            msg: "wrong inputs!"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        completion: false
    })
    res.json({
        msg: "to-do created!"
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "wrong inputs!"
        })
        return;
    }

    await todo.updateOne({
        _id: req.body.id
    },{
        completion: true
    })
    
    res.json({
        msg: "marked as completed!"
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`);
})
