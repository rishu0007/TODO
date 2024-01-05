const express = require("express");
const {createTodo, updateTodo} = require("./types");
const {todo} = require("./db")
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

// body {
     // title: string,
     // description: string
// }

app.post("/todo", async(req,res) => {
    const title = req.body.title;
    const description = req.body.description;

    const parsed = createTodo.safeParse({
        title: title,
        description: description
    })

    if(!parsed.success) {
        res.status(411).json({
            msg: "you sent wrong input"
        })
        return;
    }
    // put it in mongodb
    await todo.create({
        title: title,
        description: description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req,res) => {
    const todos = await todo.find({});
    res.json({
        todos,
    })
})

app.put("/completed", async (req,res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);

    if(!parsePayload.success) {
        res.status(411).json({
            msg: "wrong id",
        })
        return;
    }
    // update in mongodb
    await todo.updateMany({
        _id: req.body.id
    }, {
        completed: true,
    })
    res.json({
        msg: "todo marked completed"
    })
})

app.listen(3000);