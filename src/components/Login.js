import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Registro from './Registro.js';
import './Login.css'; // Importar los estilos CSS

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
      alert('¡Inicio de sesión exitoso!');
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };
  return (
    <div className="container">
      <h2 className="heading">Iniciar Sesión</h2>
      <form className="form">
        <input className="input" type="text"  placeholder="Usuario" value={username}
        onChange={(e) => setUsername(e.target.value)} /><br />
        <input className="input" type="password" placeholder="Contraseña"value={password}
        onChange={(e) => setPassword(e.target.value)} /><br />
        <button className="button" type="submit" onClick={handleLogin}>Iniciar Sesión</button>
      </form>
      <p className="text">¿No tienes una cuenta? <Link to="/registro" className="link">Crear cuenta</Link></p>
      
    </div>
  );
}

export default Login;