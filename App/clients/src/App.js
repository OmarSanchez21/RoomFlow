import {React , useRef} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm  from './pages/auth/LoginForm/LoginForm';
import RegisterForm from './pages/auth/RegisterForm/RegisterForm';
import Home from './pages/home/HomePage';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}