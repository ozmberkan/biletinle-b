import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log("✅ - Sunucu Aktif! --- PORT: " + process.env.PORT);
});
