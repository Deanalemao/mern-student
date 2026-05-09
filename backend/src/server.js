import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js"
import studentRoute from "./routes/studentRoute.js";
import path from "path";

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

//Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Allow localhost for development
    if (origin.includes('localhost')) return callback(null, true);

    // Allow your Render frontend URL
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      'https://mern-student-frontend.onrender.com', // Replace with your actual Render frontend URL
      'https://your-frontend-app.onrender.com' // Add your actual frontend URL here
    ].filter(Boolean);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));
app.use(express.json());

//Routes
app.use("/api/students",studentRoute);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});

connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log("Server started on port",PORT);
});
});


