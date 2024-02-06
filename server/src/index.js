import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import devicesRouter from "./routers/devicesRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/devices", devicesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
