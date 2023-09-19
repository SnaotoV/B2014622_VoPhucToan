const expresss = require('express');
const cors = require('cors');

const app = expresss();

app.use(cors());
app.use(expresss.json());

app.get('/', (req, res) => {
    res.json({ messeage: 'Welcome to contact book application.' });
});

module.exports = app;
