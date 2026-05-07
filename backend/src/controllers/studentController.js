import { json } from "express";
import Student  from "../model/Student.js";

export const getAllStudents = async (req,res) => {

    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error("Error in getAllStudent controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const getStudentById = async (req,res) => {

    try {
        const student = await Student.findById(req.params.id);
        if(!student) return res.status(404).json({message:"Student not found"});
        res.status(200).json(student);
    } catch (error) {
        console.error("Error in getStudentById controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const insertStudent = async (req,res) => {

    try {
        const {name,rollno,age,department,phoneno} = req.body;
        const student = new Student({name,rollno,age,department,phoneno});
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error("Error in insertStudent controller",error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const updateStudent = async (req,res) => {

    try {
        const {name,rollno,age,department,phoneno} = req.body;
        const updateStudent = await Student.findByIdAndUpdate(req.params.id, {name,rollno,age,department,phoneno}, {new:true});
        if(!updateStudent) return res.status(404).json({message:"Student not found"});
        res.status(200).json({message:"student updated successfully",updateStudent});
    } catch (error) {
        console.error("Error in updateStudent controller",error);
        res.status(500).json({message:"Internal server error"});
        
    }
}

export const deleteStudent = async (req,res) => {

    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student) return res.status(404).json({message:"Student not found"});
        res.status(200).json({message:"Student deleted successfully"});
    } catch (error) {
        console.error("Error in deleteStudent controller",error);
        res.status(500).json({message:"Internal server error"});
        
    }
}