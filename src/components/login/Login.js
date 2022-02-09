import React from 'react';
import './login.css';
// import Validation from './ValidationLogin';

const Login = () => {
  return (
      <>
        <div className = 'login'>
          <span className = 'loginTitle'>Login</span>
          <form className = 'loginForm'>
            <label>Username</label>
            <input className = 'loginInput' type = 'text' placeholder = 'Enter username...' />
            <label>Password</label>
            <input className = 'loginInput' type = 'password' placeholder = 'Enter password...' />
            <button className = 'loginButton'>LOGIN</button>
          </form>
        </div>
      </>
  )
};

export default Login;
