const { buildSchema } = require('graphql');
// GraphQL setup


const schema = buildSchema(`

type Query {
    projectName: String
    me:User 
  }


type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): AuthPayload
  }
  
type User {
    id: ID
    username: String!
    email: String!
    password: String!
  }

type AuthPayload {
    token: String
    user: User
  }

`);

module.exports = schema;