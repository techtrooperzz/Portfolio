import express from "express";
import { generateXML } from "../controllers/sitemap.controller.js";

const router = express.Router();

router.get("/sitemap.xml", generateXML);

export default router;