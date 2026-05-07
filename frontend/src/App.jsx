import React from 'react'
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Display from './pages/Display';
import InsertStudent from './pages/InsertStudent';
import UpdateStudent from './pages/UpdateStudent';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/insert" element={<InsertStudent/>}/>
          <Route path="/update/:id" element={<UpdateStudent/>}/>
          <Route path="/display" element={<Display/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App