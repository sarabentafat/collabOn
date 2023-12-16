import { Profiler, useState } from 'react'
import { Routes, Route, Navigate , BrowserRouter} from "react-router-dom";
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import AdminMain from './pages/businessOwner/AdminMain';
import Calender from './pages/businessOwner/Calender';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
 import ProfileB from './pages/businessOwner/profileB';
import ProjectDetails from './pages/businessOwner/ProjectDetails';
import Analytics from './pages/businessOwner/Analytics';

function App() {


  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="*" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/profile" element={<ProfileB />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
