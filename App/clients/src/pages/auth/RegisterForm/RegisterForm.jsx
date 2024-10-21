import React from 'react'
import './RegisterForm.css'
import { FaUser, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
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

        <div className="remember-forgot">
            <label><input type="checkbox" />Recuerdame</label>
            <a href="#">Olvidaste tu contraseña?</a>
        </div>

        <button type="submit">Registrate ahora!</button>

        <div className="register-link">
            <p>Ya tienes una cuenta? <a href="#">Inicia Sesión!</a></p>
        </div>
    </form>
</div>
  )
}

export default RegisterForm;