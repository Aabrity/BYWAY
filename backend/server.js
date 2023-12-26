// server.js
import express from "express";
import cors from "cors";
import authRoutes from "./auth";
import packagesRoutes from "./packages";
import contactusRoutes from "./contactus";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use("/auth", authRoutes);
app.use("/packages", packagesRoutes);
app.use("/contactus", contactusRoutes);

app.listen(8081, () => {
  console.log("8081 is Listening ");
});
