import express from "express";
import { postFeedback } from "../controllers/feedback-controller.js";

const rout = express.Router();

rout.post('/api/feedback', postFeedback);

export default rout;
