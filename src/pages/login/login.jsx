import React, { useState } from 'react';
import "./login.css"
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login attempt with:', { email, password });
    } else {
      console.log('Signup attempt with:', { name, email, password });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="toggle-buttons">
          <button
            onClick={() => setIsLogin(true)}
            className={`toggle-button ${isLogin ? 'active' : ''}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`toggle-button ${!isLogin ? 'active' : ''}`}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-header">
          <h2 className="auth-title">
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p className="auth-description">
            {isLogin
              ? 'Enter your credentials to access your account'
              : 'Fill in your details to get started'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
                className="form-input"
                placeholder="John Doe"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              placeholder="m@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button type="submit" className="submit-button">
            {isLogin ? 'Sign in' : 'Sign up'}
          </button>
        </form>

        {isLogin && (
          <button className="forgot-password">
            Forgot password?
          </button>
        )}
      </div>
    </div>
  );
};

export default AuthForm;