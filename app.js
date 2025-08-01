import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import registerRoutes from "./globalRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

registerRoutes(app);

app.get("/", (req, res) => {
  res.send(`
    <div style="font-family: sans-serif; text-align: center; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h2 style="color: #444;"><span style="color: #ff4d6d;font-size: 64px;line-height:1; letter-spacing:-4px; font-family: sans">Biletinle</span> </h2>
        <h2 style="color: #444;">✅SUNUCU✅</h2>
    </div>
  `);
});

export default app;
