const express = require("express");
const {graphqlHTTP} = require("express-graphql");
const router = express.Router();
const schema = require('../graphQL/userSchema/userSchema');
const rootResolver = require('../rootResolver/rootResolver');

router.use('/graphql', graphqlHTTP(() => ({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true,
})));

router.use(  (req, res) => {
  res.status(200).send(
        `<h1>Welcome to my Portfolio</h1>`
    )
})
module.exports=router;