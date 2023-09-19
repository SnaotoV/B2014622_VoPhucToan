const expresss = require('express');
const cors = require('cors');
const contactsRouter = require("./app/routes/contact.route");

const app = expresss();

app.use(cors());
app.use(expresss.json());
app.get('/', (req, res) => {
    res.json({ messeage: 'Welcome to contact book application.' });
});
app.use("/api/contacts", contactsRouter);

module.exports = app;
