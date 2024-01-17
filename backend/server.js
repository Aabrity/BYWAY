import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from 'dotenv';
import express from "express";

import authRoutes from "./auth.js";
import blogRoutes from "./blog.js";
import contactusRoutes from "./contactus.js";
import protectedRoutes from "./middleware.js";
import packagesRoutes from "./packages.js";
import planTripRoutes from "./planTrip.js";

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
app.use("/blogs",blogRoutes);
app.use("/planTrip",planTripRoutes);
// app.use("/planTrip",planTripRoutes);
app.use("/blogs", blogRoutes);
app.use("/planTrip", planTripRoutes);
app.use("/admin", protectedRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`${PORT} is Listening`);
});
