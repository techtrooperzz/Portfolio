import express from "express";
import { sendWelcomeEmail } from "../controllers/email.controller.js";

const router = express.Router();

router.post("/send-email", sendWelcomeEmail);

export default router;