import React from "react";

const UserLogin = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form autoComplete="off">
        <div className="user-box">
          <input type="email" name="email" required />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required />
          <label>Password</label>
        </div>
        <button to="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;
