const express = require('express');
const services = require('./service.json')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('users management server is running and restart')
});

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