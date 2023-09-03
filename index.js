const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const db = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
dotenv.config();


app.get("/", (req, res) => {
    res.send("hello from server...!")
})

app.use("/user", userRoutes);

app.listen(process.env.PORT || 4000, () => {
    console.log("server is running...!");
});