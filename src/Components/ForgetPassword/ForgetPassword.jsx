import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [mobile, setMobile] = useState('');

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      // const mobile = window.location.pathname.split('/').pop(); // Get the mobile number from the URL
      // const response = await axios.put(`https://todo-backend-p60w.onrender.com/api/user/${mobile}`, { password: newPassword }); // Replace with your API endpoint
      const response = await axios.put(`http://localhost:5000/api/user/${mobile}`, { password: newPassword }); // Replace with your API endpoint

      console.log(response.data); // Handle success or redirect to login page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Forget Password</h2>
      <form onSubmit={handleForgetPassword}>
  
      <div style={{display:'flex',flexDirection:'column'}}>
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input
          type="text"
          placeholder="Registered mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
