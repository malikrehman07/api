const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const Auth = require('./router/auth');
const Compaigns = require("./router/compaigns");


const { PORT = 8000 } = process.env;
connectDB()

const corsOptions = { origin: 'http://localhost:5173' }
app.use(cors(corsOptions))
app.use(express.json()) 

app.use('/auth', Auth);
app.use('/compaigns', Compaigns)

app.get('/', (req, res) => {
    const currentTime = new Date().toISOString()
    res.send(`App is running on Port${PORT} with current time ${currentTime}`)

})
app.listen(PORT, () => {
    console.log(`App is running on this port ${PORT}`)
})