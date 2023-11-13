import express from "express";
import { Payment } from "../controller/stripe.controller.js";
export let routerStripe = express.Router();
routerStripe.post("/create-checkout-session", Payment);
