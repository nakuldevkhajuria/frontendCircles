import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://todo-backend-p60w.onrender.com/api/user/register', { name, email, password, mobile }); // Replace with your API endpoint
      console.log(response.data); // Handle success or redirect to login page
      setSuccessMessage('Registration successful!');
      setName(''); 
      setEmail(''); 
      setPassword(''); 
      setMobile(''); 
    } catch (error) {
      setSuccessMessage('Registration unsuccessful!');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {successMessage && <p style={{color:"red"}}>{successMessage}</p>}
      <form onSubmit={handleRegister}>
      {/* <form > */}

        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
