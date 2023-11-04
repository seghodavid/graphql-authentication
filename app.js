const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const connectDatabase = require('./config/db.config');

dotenv.config();

const app = express();


// app.use('/graphql', graphqlHTTP())


connectDatabase().then(()=> {
    app.listen(4000, console.log('server listening on port 4000'));
})