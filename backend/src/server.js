import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js"
import studentRoute from "./routes/studentRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const frontendDistPath = path.join(__dirname, "../../frontend/dist");

//Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (origin && (origin.includes('localhost') || origin.includes('127.0.0.1'))) return callback(null, true);

    const allowedOrigins = [
      process.env.FRONTEND_URL,
    ].filter(Boolean);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));

app.use(express.json());

//Routes
app.use("/api/students", studentRoute);

console.log("Frontend path:", frontendDistPath);
console.log("Index exists:", fs.existsSync(path.join(frontendDistPath, "index.html")));

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log("Server started on port",PORT);
});
});


