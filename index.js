const express = require("express");
const comments = require('./routes/comments')
const contacts = require('./routes/contacts')
const products = require('./routes/products')
const vehicles = require('./routes/vehicles')
// const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(comments)
app.use(contacts)
app.use(products)
app.use(vehicles)

app.use(express.static('public'));









app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
