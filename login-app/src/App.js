import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Login from './Components/Login';
import Mensaje from './Components/Mensaje';

function App() {

  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const getLogin = (user, password) => {
  const usernameCorrecto = "admin";
  const passwordCorrecto = "123456";

  if (user === usernameCorrecto && password === passwordCorrecto) {
    setTipoMensaje('exito');
    setMensaje("Bienvenido " + user);
  } else {
    setTipoMensaje('error');
    setMensaje("Tu no estas autorizado, alertando al FBI");
  }
};


  return (
    <div className="app-container">
      <Login onGetLogin={getLogin}/>
      {mensaje && <Mensaje mensaje={mensaje} tipo={tipoMensaje} />}
    </div>
  );
}

export default App;
