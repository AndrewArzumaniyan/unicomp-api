import express from "express";
import { login, register, getMe } from "../controllers/user-controller.js";
import { registerValidation, loginValidation } from '../validation.js';
import { handleValidationErrors, checkAuth } from '../utils/index.js';

const rout = express.Router();

rout.post('/login', loginValidation, handleValidationErrors, login);
rout.post('/register', registerValidation, handleValidationErrors, register);
rout.get('/getme', checkAuth, getMe);

export default rout;