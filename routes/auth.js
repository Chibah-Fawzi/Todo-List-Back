const authController = require("../controllers/auth");


module.exports = (app) => {

    app.post('/signup', authController.SignUp);
    app.post('/login', authController.Login);


}
