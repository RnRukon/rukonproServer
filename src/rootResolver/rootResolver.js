const { projectTitle } = require("../contollers/projectController");
const { userRegisterContoller: userRegister, userLoginContoller: userLogin, getMeContoller } = require("../contollers/userController");



const rootResolver = {
    projectName: projectTitle,
    registerUser: userRegister,
    loginUser: userLogin,
    me: getMeContoller
};


module.exports = rootResolver;