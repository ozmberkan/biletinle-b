import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import eventRoutes from "./routes/event.route.js";
import eventTypesRoutes from "./routes/eventType.route.js";
import ticketTypesRoutes from "./routes/ticketType.route.js";
import userRoutes from "./routes/user.route.js";
import ticketRoutes from "./routes/ticket.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/eventTypes", eventTypesRoutes);
app.use("/api/ticketTypes", ticketTypesRoutes);
app.use("/api/ticket", ticketRoutes);

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; text-align: center; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h2 style="color: #444;"><span style="color: #ff4d6d;font-size: 64px;line-height:1; letter-spacing:-4px; font-family: sans">Biletinle</span> </h2>
        <h2 style="color: #444;">✅SUNUCU✅</h2>
    </div>
  `);
});

app.listen(process.env.PORT, () => {
  console.log("✅ - Sunucu Aktif! --- PORT: " + process.env.PORT);
});
