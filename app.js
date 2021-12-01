const express = require('express')
const app = express()
const port = 8888
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv").config();

const todosRoute = require('./routes/todos');
const authRoute = require('./routes/auth');

app.use(bodyParser.json());

app.use(cors())



authRoute(app);
todosRoute(app);

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))