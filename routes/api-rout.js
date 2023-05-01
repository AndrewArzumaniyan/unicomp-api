import express from "express";
import { getCategories, getUniversities, getGid } from "../controllers/api-controller.js";

const rout = express.Router();

rout.get('/api/universities', getUniversities);
rout.get('/api/categories', getCategories);
rout.get('/api/gid', getGid);

export default rout;
