const { projectTitle } = require("../contollers/projectController");
const { userRegisterController: userRegister, userLoginController: userLogin, getMeController } = require("../contollers/userController");



const rootResolver = {
    projectName: projectTitle,
    registerUser: userRegister,
    loginUser: userLogin,
    me: getMeController
};


module.exports = rootResolver;