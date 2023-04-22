import express from "express";
import { getComparePage, redirectComparePage } from "../controllers/compare-controller.js";

const rout = express.Router();

rout.get('/', getComparePage);
rout.get('/home', redirectComparePage)

export default rout;