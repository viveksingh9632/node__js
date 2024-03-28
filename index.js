const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('Hello From Home Page');
});

app.get("/about", (req, res) => {
    res.send('Hello From About Page');
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
