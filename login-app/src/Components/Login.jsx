import { useForm } from "react-hook-form";
import React, { useState } from "react";
import '../css/Login.css'

function  Login({onGetLogin}) {

const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
    if (data.username.trim() === '' || data.pass.trim() === '') {
    setError('Error, usuario y contraseña no pueden contener espacios en blanco o estar vacios');
  } else {
    setError('');
    onGetLogin(data.username, data.pass);
  }
  };

const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (e.target.value !== '') clearErrors('username');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value !== '') clearErrors('pass');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <div>
        <h3>Bienvenido de vuelta, ingresa tus credenciales</h3>

        <div className="data">
          <div>
            <label>Usuario: </label>
            <input 
              type="text"
              {...register("username", { required: true })}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="errors">
            <label>
              {errors.username?.type === "required" && "Username es requerido"}
            </label>
          </div>
        </div>

        <p></p>

        <div>
          <label>Contraseña: </label>
          <div className="password-container">
          <input
              type={showPassword ? "text" : "password"}
            {...register("pass", { required: true })}
            onChange={handlePasswordChange}
          />
            <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
              <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
          </div>
        </div>
        <div className="errors">
          <label>
            {errors.pass?.type === "required" && "Constraseña es requerida"}
          </label>
        </div>

        <p></p>
        <button type="submit" className="submit">Ingresar</button>
        <p></p>
        {error && <p className="mensaje-error">{error}</p>}
      </div>
    </form>
  );
}

export default Login;
