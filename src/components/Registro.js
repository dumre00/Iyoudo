import './Registro.css'; // Importar los estilos CSS
import React, { useState } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function Registro() {
    const [username, setUsername] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const navigate = useNavigate();


    const handleRegister = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('surName', surname);
        localStorage.setItem('password', password);
        localStorage.setItem('phone', phone);
        localStorage.setItem('mail', mail);
    
        alert('¡Registro exitoso!');
        setUsername('');
        setSurname('');
        setPassword('');
        setPhone('');
        setMail('');
        navigate('/login');


      };
      
  return (
    <div className="container">
      <h2 className="heading">Registro</h2>
      <form className="form">
        <div className="form-group">
          <input className="input" type="text" placeholder="Nombre" value={username}
        onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <input className="input" type="text" placeholder="Apellidos" value={surname}
        onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div className="form-group">
          <input className="input" type="text" placeholder="Correo" value={mail}
        onChange={(e) => setMail(e.target.value)} />
        </div>
        <div className="form-group">
          <input className="input" type="text" inputMode="numeric"  pattern="[0-9]*" placeholder="Telefono" value={phone}
        onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <input className="input" type="password" placeholder="Contraseña" value={password}
        onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className="button" type="submit"  onClick={handleRegister} >Registro</button>
      </form>
    </div>
  );
}

export default Registro;
