const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // does know how to handle graphql request : middleware
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();


// allow cross-origin request
app.use(cors())

// connect to database

mongoose.connect("mongodb+srv://kanchanp:Pass2021@cluster0.apopn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
mongoose.connection.once('open', () => {
    console.log("Connected to database");
})

app.use('/graphql', graphqlHTTP({
    schema, // schema:schema is equal to schema in  ES6
    graphiql: true // to see graphiQL tool on the browser
}));

app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');