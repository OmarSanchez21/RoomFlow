import React from 'react'
import './RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="body">
    <div className='wrapper'>
    <form action=''>
        <h1>Registrate</h1>
        <div className="input-box">
            <input type="text" placeholder="Username" required /> 
            <FaUser className="icon"/> 
        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required /> 
            <FaLock className="icon"/>
        </div>

        <div className="input-box">
            <input type="password" placeholder="Confirm Password" required /> 
            <FaLock className="icon"/>
        </div>

        <div className="input-box">
            <input type="email" placeholder="Email" required /> 
            <MdEmail className="icon"/>
        </div>

        <div className="input-box">
            <input type="text" placeholder="Name" required /> 
            <FaLock className="icon"/>
        </div>

        <div className="input-box">
            <input type="text" placeholder="Lastname" required /> 
            <FaLock className="icon"/>
        </div>

        <div className="input-box">
            <input type="text" placeholder="Age" required /> 
            <FaCalendarAlt className="icon"/>
        </div>

        <button type="submit">Registrate ahora!</button>

        <div className="register-link">
            <p>Ya tienes una cuenta? <a href="/login">Inicia Sesión!</a></p>
        </div>
    </form>
</div>
</div>
  )
}

export default RegisterForm;