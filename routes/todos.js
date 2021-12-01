const todosController = require("../controllers/todos")
const authenticateToken = require('../controllers/auth')


module.exports = (app) => {

    app.get('/todos', todosController.getTodos)
    app.post('/todos', todosController.addTodos)
    // app.put('/', todosController.editTodos);

}
