const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { ContactSchema, ContactRoot } = require('./contact');

const schema = buildSchema(ContactSchema);
const rootValue = Object.assign(
  ContactRoot,
);
  
const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true,
}));
app.listen(4000);