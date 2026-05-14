const express = require('express'); require('dotenv').config();
const cors = require("cors");
const connectDb = require('./database/database')
const router = require('./auth-router/router')




const app = express();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use(
  cors({
    origin: "https://call-of-worker.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(router);

const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log(`Your Server  is running on ${PORT}`)
})
