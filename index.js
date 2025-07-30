import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import userRoutes from "./routes/user.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("✅ - Sunucu Aktif! --- PORT: " + process.env.PORT);
});
