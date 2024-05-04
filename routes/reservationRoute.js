// reservationRoute.js
import express from "express";
import  {send_reservation}  from "../controllers/reservationController"; // Make sure to import send_reservation properly

const router = express.Router();

router.post("/send", send_reservation);

export default router; // Exporting the router as default
