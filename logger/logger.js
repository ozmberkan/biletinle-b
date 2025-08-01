// logger/logger.js
import winston from "winston";
import path from "path";

// 📁 logs klasörü altına log dosyaları yazılacak
const logDir = "logs";

const logger = winston.createLogger({
  level: "info", // default log seviyesi
  format: winston.format.combine(
    winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
    winston.format.printf(
      ({ level, message, timestamp }) =>
        `[${timestamp}] ${level.toUpperCase()}: ${message}`
    )
  ),
  transports: [
    // 🔴 Hatalar error.log dosyasına
    new winston.transports.File({
      filename: path.join(logDir, "error.log"),
      level: "error",
    }),
    // 🔵 Diğer her şey combined.log'a
    new winston.transports.File({
      filename: path.join(logDir, "combined.log"),
    }),
  ],
});

// 🖥️ Geliştirme ortamında renkli consola da yaz
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    })
  );
}

export default logger;
