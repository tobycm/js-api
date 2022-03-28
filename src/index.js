const express = require('express');

const api = express();

api.listen(5000, () => {
    console.log('API up and running!');
});

api.get("/redirect/api/js/nitro", (req, res) => {
    res.redirect(302, "https://youtube.com/watch?v=dQw4w9WgXcQ");
});