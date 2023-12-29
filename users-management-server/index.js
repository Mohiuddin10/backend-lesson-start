const express = require('express');
const services = require('./service.json')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'Mohiuddin', email: 'mohi@gmail.com'},
    {id: 2, name: 'Roxy', email: 'roxy@gmail.com'},
    {id: 3, name: 'Bappy', email: 'bappy@gmail.com'}
]

app.use(cors())

app.get('/', (req, res) => {
    res.send('users management server is running and restart')
});

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user);
})

app.get('/user', (req, res) => {
    res.send('user is loading')
});

app.get('/services', (req, res) => {
    res.send(services)
})

app.get('/services/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const service = services.find(service => service.id === id)
    console.log(id);
    res.send(service);
})

app.listen(port, ()=> {
    console.log(`server is running in port: ${port}`);
})