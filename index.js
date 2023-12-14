// index.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require("dotenv").config();
const databaseConnection = require('./src/database/databaseConnection');
const schema = require('./src/graphQL/userSchema/userSchema');
const rootResolver = require('./src/rootResolver/rootResolver');
const authenticateJWT = require('./src/middleware/authenticateJWT');
const app = express();

// database connnection 
databaseConnection()


app.use(authenticateJWT)


app.use("/", (req, res) => {
    res.status(200).send(
        `<h1>Welcome to my Portfolio</h1>`
    )
})

app.use('/graphql', graphqlHTTP(() => ({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
})));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
