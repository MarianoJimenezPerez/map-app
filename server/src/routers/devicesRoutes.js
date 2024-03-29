import express from "express";
import {
  getAllDevices,
  getDeviceById,
  createDevice,
  generateContent,
  updateDevice,
  deleteDevice,
} from "../controllers/devicesController.js";

const devicesRouter = express.Router();

devicesRouter.get("/", getAllDevices);
devicesRouter.get("/dsa", generateContent);
devicesRouter.get("/:id", getDeviceById);
devicesRouter.post("/create", createDevice);
devicesRouter.patch("/update/:id", updateDevice);
devicesRouter.delete("/delete/:id", deleteDevice);

export default devicesRouter;
