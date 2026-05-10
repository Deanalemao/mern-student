import React from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute -top-6 sm:-top-12 md:-top-24 -right-6 sm:-right-12 md:-right-24 w-24 h-24 sm:w-40 h-40 md:w-80 md:h-80 rounded-full bg-purple-500/30 blur-xl sm:blur-2xl md:blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 left-2 sm:left-4 w-20 h-20 sm:w-36 h-36 md:w-72 md:h-72 rounded-full bg-pink-500/20 blur-xl sm:blur-2xl md:blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/4 left-1/3 w-28 h-28 sm:w-48 h-48 md:w-96 md:h-96 rounded-full bg-cyan-500/10 blur-xl sm:blur-2xl md:blur-3xl animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 sm:px-5 sm:py-3 mb-4 sm:mb-6 shadow-xl shadow-purple-500/20 backdrop-blur">
            <span className="text-sm sm:text-base md:text-lg font-semibold text-white">Modern student dashboard with clean design</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-4 sm:mb-6">
            Student Management System
          </h1>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Manage student details with ease, add new records, update entries, and keep your data organized.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-black/20 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-5">👥</div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">View Students</h2>
            <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Browse all student records in a slick table interface.</p>
            <button
              className="btn btn-sm sm:btn-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 shadow-lg hover:shadow-xl w-full sm:w-auto"
              onClick={() => navigate('/display')}
            >
              View Now
            </button>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 shadow-2xl shadow-black/20 hover:-translate-y-1 sm:hover:-translate-y-2 transition-transform duration-300">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-5">➕</div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Add Student</h2>
            <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Create a new student record with a smooth form experience.</p>
            <button
              className="btn btn-sm sm:btn-md bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg hover:shadow-xl w-full sm:w-auto"
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
