import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import devicesRouter from "./routers/devicesRoutes.js";
import db from "./db/config.js";
import { seedIfEmpty } from "./utils/seedIfEmpty.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Sync DB and seed function
db.sync()
  .then(() => {
    console.log("DB connected");
    return seedIfEmpty();
  })
  .catch((error) => {
    console.error("Error during the DB sync:", error);
  });

//routes
app.use("/devices", devicesRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
