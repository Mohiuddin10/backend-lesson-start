const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('users management server is running and restart')
});

app.get('/user', (req, res) => {
    res.send('user is loading')
});

app.listen(port, ()=> {
    console.log(`server is running in port: ${port}`);
})