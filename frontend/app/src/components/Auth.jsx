import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Create this CSS file

const Auth = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Fixed credentials
  const validCredentials = [
    { username: '******', password: '*******' }
    // enter more 
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const isValid = validCredentials.some(
      cred => cred.username === username && cred.password === password
    );

    if (isValid) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-image-container">
          <img 
            src="https://www.uxdt.nic.in/wp-content/uploads/2020/06/NIELIT-Preview.png" 
            alt="NIELIT Logo" 
            className="auth-image"
          />
        </div>
      </div>
      <div className="auth-right">
        <div className="auth-box">
          <h2>Workshop Management Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
