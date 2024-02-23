import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import * as dotenv from 'dotenv';
// import compareRout from "./routes/compare-rout.js";
import apiRout from "./routes/api-rout.js";
import userRout from "./routes/user-rout.js";
import feedbackRout from './routes/feedback-rout.js';


dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Добавьте middleware для обработки CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // Замените * на домен вашего фронтенда, если нужно разрешить доступ только с определенных доменов
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.use(express.json());

app.use(cors());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.use(apiRout);
// app.use(compareRout);
app.use(userRout);
app.use(feedbackRout);


app.listen(PORT, '0.0.0.0', (err) => {
  err ? console.log(err) : console.log(`listening port: ${PORT}`);
});