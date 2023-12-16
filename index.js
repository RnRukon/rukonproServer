// index.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require("dotenv").config();
const databaseConnection = require('./src/database/databaseConnection');
const schema = require('./src/graphQL/userSchema/userSchema');
const rootResolver = require('./src/rootResolver/rootResolver');
const authenticateJWT = require('./src/middleware/authenticateJWT');
const graphqlRouter=require("./src/routes/routes")
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
