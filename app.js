import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {dbConnection} from "./database/dbConnection.js"
import router from "./routes/reservationRoute.js";
const app = express();
dotenv.config({ path: ".env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", router);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD AGAIN",
  });
});

dbConnection();



export default app;
