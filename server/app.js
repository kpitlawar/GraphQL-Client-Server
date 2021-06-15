const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // does know how to handle graphql request : middleware
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema, // schema:schema is equal to schema in  ES6
    graphiql: true // to see graphiQL tool on the browser
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');