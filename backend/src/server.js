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
  origin: 'http://localhost:5173', // Vite ports
  credentials: true
}));
app.use(express.json());

//Routes
app.use("/api/students",studentRoute);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req,res) => {
  res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
});

connectDB().then(() =>{
    app.listen(PORT, () => {
    console.log("Server started on port",PORT);
});
});


