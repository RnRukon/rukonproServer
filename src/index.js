// index.js
const express = require('express');
const serverless = require("serverless-http");
require("dotenv").config();
const databaseConnection = require('./database/databaseConnection');
const authenticateJWT = require('./middleware/authenticateJWT');
const graphqlRouter=require("./routes/routes")
const app = express();

// database connection
databaseConnection()
    .then(()=>{
      console.log("Database connected");
    }).catch(error=>{
        throw new Error(error)
})

//user authenticated with TWT
app.use(authenticateJWT)




// graphql route
app.use(graphqlRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports.handler = serverless(app);