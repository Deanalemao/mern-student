import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import apiClient from '../config/api';

const InsertStudent = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    age: '',
    department: '',
    phoneno: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Please enter student name');
      return;
    }
    if (!formData.rollno.trim()) {
      toast.error('Please enter roll number');
      return;
    }
    if (!formData.age || formData.age < 1) {
      toast.error('Please enter valid age');
      return;
    }
    if (!formData.department.trim()) {
      toast.error('Please select a department');
      return;
    }
    if (!formData.phoneno.trim()) {
      toast.error('Please enter phone number');
      return;
    }

    try {
      setLoading(true);
      await apiClient.post('/api/students', formData);
      toast.success('Student added successfully!');
      setFormData({
        name: '',
        rollno: '',
        age: '',
        department: '',
        phoneno: '',
      });
      setTimeout(() => {
        navigate('/display');
      }, 1000);
    } catch (error) {
      console.error('Error adding student:', error);
      toast.error('Failed to add student');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 text-white">
      <div className="mx-auto w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Add New Student
          </h1>
          <p className="mt-3 text-slate-300">Create a new student record with a modern form style.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-bold">Student Name *</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/15"
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-bold">Roll Number *</span>
            </label>
            <input
              type="text"
              name="rollno"
              value={formData.rollno}
              onChange={handleChange}
              placeholder="Enter roll number"
              className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/15"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-bold">Age *</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/15"
                min="1"
                max="100"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white font-bold">Department *</span>
              </label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="select select-bordered w-full bg-white/10 border-white/20 text-white focus:border-cyan-400 focus:bg-white/15"
                required
              >
                <option value="" className="bg-slate-800 text-white">Select a department</option>
                <option value="Computer Science" className="bg-slate-800 text-white">Computer Science</option>
                <option value="Electronics" className="bg-slate-800 text-white">Electronics</option>
                <option value="Mechanical" className="bg-slate-800 text-white">Mechanical</option>
                <option value="Electrical" className="bg-slate-800 text-white">Electrical</option>
                <option value="Civil" className="bg-slate-800 text-white">Civil</option>
                <option value="Chemical" className="bg-slate-800 text-white">Chemical</option>
              </select>
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-white font-bold">Phone Number *</span>
            </label>
            <input
              type="tel"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="input input-bordered w-full bg-white/10 border-white/20 text-white placeholder-slate-400 focus:border-cyan-400 focus:bg-white/15"
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-xl hover:shadow-2xl disabled:opacity-60"
              disabled={loading}
            >
              {loading ? 'Adding...' : '✅ Add Student'}
            </button>
            <button
              type="button"
              className="btn w-full btn-ghost border border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate('/display')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InsertStudent;
