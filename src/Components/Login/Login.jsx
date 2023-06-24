import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

const Login = () => {
    // const navigate =useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showDashboard,setShowDashboard] = useState(false)
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:5000/api/user/login',  { email, password }); // Replace with your API endpoint
            const response = await axios.post('https://tangerine-stardust-9116fd.netlify.app/api/user/login',  { email, password }); // Replace with your API endpoint


      console.log(response.data); // Handle success or redirect to dashboard
      setSuccessMessage('login successful!');
     <Dashboard/>
      setEmail(''); 
      setPassword(''); 
      setShowDashboard(true)
    //   navigate('/dashboard');
  
    } catch (error) {
      setSuccessMessage('login unsuccessful!');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {successMessage && <p style={{color:"red"}}>{successMessage}</p>}
      <form onSubmit={handleLogin}>
      

        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {showDashboard &&      <Dashboard/>}
 
    </div>
  );
};

export default Login;
