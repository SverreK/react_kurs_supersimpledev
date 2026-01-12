import { useState } from 'react';
import './SignIn.css';

export function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () =>
    showPassword ? setShowPassword(false) : setShowPassword(true);
  return (
    <>
      <p className="title">Hello, Welcome to my website</p>
      <div>
        <input className="input-email" placeholder="Email" />
      </div>

      <div className="password-row">
        <input
          type={showPassword ? 'text' : 'password'}
          className="input-password"
          placeholder="Password"
        />
        <button className="button-show" onClick={toggleShowPassword}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <div className="button">
        <button className="button-login">Login</button>
        <button className="button-signup">Sign Up</button>
      </div>
    </>
  );
}
