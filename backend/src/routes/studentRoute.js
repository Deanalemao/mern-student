import express from "express";
import { deleteStudent, getAllStudents, getStudentById, insertStudent, updateStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/",getAllStudents);
router.get("/:id",getStudentById);
router.post("/",insertStudent);
router.put("/:id",updateStudent);
router.delete("/:id",deleteStudent);

export default router;