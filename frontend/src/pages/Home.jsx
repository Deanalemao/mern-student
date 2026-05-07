import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-purple-500/30 blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-4 w-72 h-72 rounded-full bg-pink-500/20 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 mb-6 shadow-xl shadow-purple-500/20 backdrop-blur">
            <span className="text-lg font-semibold text-white">Modern student dashboard with clean design</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
            Student Management System
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Manage student details with ease, add new records, update entries, and keep your data organized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-6xl mb-5">👥</div>
            <h2 className="text-2xl font-bold mb-3">View Students</h2>
            <p className="text-slate-300 mb-6">Browse all student records in a slick table interface.</p>
            <button
              className="btn bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-lg hover:shadow-xl"
              onClick={() => navigate('/display')}
            >
              View Now
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-6xl mb-5">➕</div>
            <h2 className="text-2xl font-bold mb-3">Add Student</h2>
            <p className="text-slate-300 mb-6">Create a new student record with a smooth form experience.</p>
            <button
              className="btn bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg hover:shadow-xl"
              onClick={() => navigate('/insert')}
            >
              Add Student
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20 hover:-translate-y-2 transition-transform duration-300">
            <div className="text-6xl mb-5">📝</div>
            <h2 className="text-2xl font-bold mb-3">Update Records</h2>
            <p className="text-slate-300 mb-6">Edit existing student details quickly and securely.</p>
            <button
              className="btn bg-gradient-to-r from-pink-500 to-red-500 text-white border-0 shadow-lg hover:shadow-xl"
              onClick={() => navigate('/display')}
            >
              Manage
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl">
            <h3 className="text-3xl font-semibold text-white mb-3">Simple</h3>
            <p className="text-slate-300">A clean UI built with Tailwind and DaisyUI for a smooth user experience.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl">
            <h3 className="text-3xl font-semibold text-white mb-3">Fast</h3>
            <p className="text-slate-300">Lightning-fast CRUD actions and responsive page transitions.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-xl">
            <h3 className="text-3xl font-semibold text-white mb-3">Reliable</h3>
            <p className="text-slate-300">Solid data flow with your backend and persistent MongoDB storage.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
