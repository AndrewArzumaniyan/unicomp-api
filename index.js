import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
// import compareRout from "./routes/compare-rout.js";
import apiRout from "./routes/api-rout.js";
import userRout from "./routes/user-rout.js";


dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.use(apiRout);
// app.use(compareRout);
app.use(userRout);


app.listen(PORT, '0.0.0.0', (err) => {
  err ? console.log(err) : console.log(`listening port: ${PORT}`);
});