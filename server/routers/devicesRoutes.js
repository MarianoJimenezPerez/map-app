import express from "express";
import { getDevices } from "../controllers/devicesController.js";

const devicesRouter = express.Router();

devicesRouter.get("/", getDevices);

export default devicesRouter;
