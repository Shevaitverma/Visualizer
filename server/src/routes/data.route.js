import express from "express";
const router = express.Router();
import { getData } from "../components/data.controller.js";

router.get('/data',getData);

export default router;