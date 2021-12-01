const Todo = require('../models/TodosModel')


function getTodos(req, res) {
    Todo.find((err, data) => {
        if (err) throw (err)

        res.json(data)
    })
}

function addTodos(req, res) {
    var u = req.body

    const todos = new Todo({
        title: u.title,
        description: u.description,
        date: u.date
    });

    todos.save(function (err, data) {
        if (err) throw err;
        res.status(200).json({ statut: 'success', data: data })
    });
}

module.exports = {
    getTodos: getTodos,
    addTodos: addTodos,
    // editTodos: editTodos,
}