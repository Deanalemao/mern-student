import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import apiClient from '../config/api';

const Display = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get('/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      toast.error('Failed to load students');
    } finally {
      setLoading(false);
    }
  };

  const deleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await apiClient.delete(`/students/${id}`);
        toast.success('Student deleted successfully');
        setStudents(students.filter(student => student._id !== id));
      } catch (error) {
        console.error('Error deleting student:', error);
        toast.error('Failed to delete student');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-slate-950">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              All Students
            </h1>
            <p className="mt-2 text-slate-300">Manage your class records with a polished student list.</p>
          </div>
          <button
            className="btn bg-gradient-to-r from-pink-500 to-red-500 border-0 text-white font-bold shadow-xl hover:shadow-2xl"
            onClick={() => navigate('/insert')}
          >
            + Add New Student
          </button>
        </div>

        {students.length === 0 ? (
          <div className="alert alert-info shadow-2xl bg-blue-500/20 border-blue-400/40 text-white">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <div>
                <h3 className="font-bold text-lg">No students found</h3>
                <div className="text-sm text-slate-200">Add your first record to begin.</div>
              </div>
            </div>
            <button
              className="btn btn-sm bg-white text-slate-900 font-bold border-0 hover:bg-slate-100"
              onClick={() => navigate('/insert')}
            >
              Add First Student
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-black/20 backdrop-blur">
            <table className="table w-full text-left text-slate-100">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white sticky top-0">
                <tr>
                  <th>Name</th>
                  <th>Roll No</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {students.map((student) => (
                  <tr key={student._id} className="hover:bg-white/10 transition-colors duration-200">
                    <td className="font-semibold text-cyan-200">{student.name}</td>
                    <td className="text-slate-200">{student.rollno}</td>
                    <td className="text-slate-300">{student.age}</td>
                    <td className="text-slate-300">{student.department}</td>
                    <td className="text-slate-300">{student.phoneno}</td>
                    <td className="flex flex-wrap gap-2">
                      <button
                        className="btn btn-sm bg-gradient-to-r from-emerald-500 to-teal-500 border-0 text-white shadow-lg hover:shadow-xl"
                        onClick={() => navigate(`/update/${student._id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm bg-gradient-to-r from-red-500 to-pink-500 border-0 text-white shadow-lg hover:shadow-xl"
                        onClick={() => deleteStudent(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Display;
