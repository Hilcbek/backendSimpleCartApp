import express from "express";
import { GetUser, Login, Register } from "../controller/user.controller.js";
export let routerUser = express.Router();
routerUser.post("/register",Register);
routerUser.post("/login",Login);
routerUser.get("/", GetUser);
