import {React , useRef} from 'react';
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="body">
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
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

            <button type="submit">Iniciar Sesion</button>

            <div className="register-link">
                <p>No tienes una cuenta? <a href='/register'>Registrate</a></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default LoginForm;