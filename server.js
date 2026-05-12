const express = require('express'); require('dotenv').config();
const cors = require("cors");
const connectDb = require('./database/database')
const routes = require('./routes/route')



const app = express();

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(
  cors({
    origin: "http://localhost:5173/api"
  })
);



const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`Your Server  is running on ${PORT}`)
})