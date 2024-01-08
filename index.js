const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const users = [
    {id: 1, name: "hasnat", email: "hasnat@gmail.com"},
    {id: 2, name: "hasan", email: "hasan@gmail.com"},
    {id: 3, name: "himu", email: "himu@gmail.com"},
]

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("User server is running")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user);
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})