const express = require("express")
const app = express()
const PORT = 6969
const schema = require('./Schemas')
const { graphqlHTTP } = require('express-graphql')
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log("Server running")
})