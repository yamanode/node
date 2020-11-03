const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>My node app</h1>');
});


app.listen(5000, () => {
    console.log("app listening on port 3000");
});
