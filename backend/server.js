import cors from "cors";
import express from "express";

import authRoutes from "./auth.js";
import contactusRoutes from "./contactus.js";
import packagesRoutes from "./packages.js";
import blogRoutes from "./blog.js";
import planTripRoutes from "./planTrip.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE"],
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/packages", packagesRoutes);
app.use("/blogs", blogRoutes);
app.use("/contactus", contactusRoutes);
app.use("/planTrip", planTripRoutes);

app.listen(8081, () => {
  console.log("8081 is Listening ");
});
