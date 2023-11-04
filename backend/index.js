const express = require("express");
const app = express();
const mongoose = require('mongoose');//importing mongoose 

const port = process.env.PORT || 8000

const cors = require('cors')
app.use(cors());
require('dotenv').config();

app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/chances', require('./routes/disaster_chances'));
app.use('/api/details', require('./routes/emergency'));

/*app.use('/api/cart', require('./routes/cart'));
app.use('/api/payment', require('./routes/payment'));
app.use('/api/product', require('./routes/products'));
app.use('/api/modification', require('./routes/modificationdata'));
 */

/* app.use('/api/vendor', require('./routes/vendor'));
 */

/* connectiontomongodb(); */
app.get('/', (req, res) => {
    res.send('Hello mechbuddy');
})

mongoose.connect(process.env.URI).then(() => { console.log("db connected") }).catch((err) => { console.log(err) });

const db=mongoose.connection;

app.listen(port, () => {
    console.log("app listening");
});

module.exports = db;



