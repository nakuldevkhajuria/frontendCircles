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
      const response = await axios.post('http://localhost:5000/api/user/register',
      { name, email, password, mobile }); 
      // const response = await axios.post('https://todo-backend-p60w.onrender.com/user/register',
      // { name, email, password, mobile }); 
      console.log(response.data); 
      setSuccessMessage('Registration successful!');
      setName('');
      setEmail('');
      setPassword('');
      setMobile('');
    } catch (error) {
      setSuccessMessage('Registration unsuccessful!');
      console.log(error.response.data)
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {successMessage && <p style={{ color: "red" }}>{successMessage}</p>}
      <form onSubmit={handleRegister}>
        {/* <form > */}
<div style={{display:'flex',flexDirection:'column'}}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
