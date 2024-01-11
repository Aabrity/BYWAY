import cors from "cors";
import express from "express";
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from "./controller/AuthController.js";
import contactusRoutes from "./contactus.js";
import packagesRoutes from "./packages.js";
import blogRoutes from "./blog.js";
import planTripRoutes from "./planTrip.js";
import protectedRoutes from "./middleware.js";

dotenv.config()

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/packages", packagesRoutes);
app.use("/contactus", contactusRoutes);
app.use("/blogs", blogRoutes);
app.use("/planTrip", planTripRoutes);
app.use("/admin", protectedRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`${PORT} is Listening`);
});
