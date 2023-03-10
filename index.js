const express = require('express');
const app = express();

const routes = require('./src/routes/routes');

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Server running!');
});