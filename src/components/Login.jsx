import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";

function Login() {
  return (
    <form className="log-form-control">
      <h1>Login</h1>

      {/* Username */}
      <div className="input-control username">
        <label for="name">
          <BiIcons.BiUser />
        </label>
        <input id="name" type="text" placeholder="User Name" required />
      </div>

      {/* Password */}
      <div className="input-control password">
        <label for="pass">
          <AiIcons.AiOutlineLock />
        </label>
        <input id="pass" type="password" placeholder="Password" required />
      </div>

      {/* Google Remember */}
      <div className="form-remember">
        <div>
          <input type="checkbox" id="remember-check" />
          <label for="remember-check">Remember Me</label>
        </div>

        <label>Forget Me?</label>
      </div>

      <Link to="/deptlist">
        <button className="form-btn" type="submit">
          Login
        </button>
      </Link>
    </form>
  );
}

export default Login;
