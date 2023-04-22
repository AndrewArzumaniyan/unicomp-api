import express from "express";
import { getCategories, getUniversities } from "../controllers/api-controller.js";

const rout = express.Router();

rout.get('/api/universities', getUniversities);
rout.get('/api/categories', getCategories);

export default rout;
