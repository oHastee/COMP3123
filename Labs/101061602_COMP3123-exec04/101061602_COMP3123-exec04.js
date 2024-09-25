const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello Express JS!');
});

app.get('/user', (req, res) => {
    const firstName = req.query.firstname || 'Pritesh';
    const lastName = req.query.lastname || 'Patel';

    res.json({firstName: firstName, lastName: lastName})
});

app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({firstname, lastname})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
