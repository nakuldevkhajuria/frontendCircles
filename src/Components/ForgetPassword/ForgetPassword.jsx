import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [additionalField, setAdditionalField] = useState('');

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      const mobile = window.location.pathname.split('/').pop(); // Get the mobile number from the URL
      const response = await axios.put(`/api/forget-password/${mobile}`, { password: newPassword }); // Replace with your API endpoint
      console.log(response.data); // Handle success or redirect to login page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Forget Password</h2>
      {/* <form onSubmit={handleForgetPassword}> */}
      <form >

        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <input
          type="text"
          placeholder="Registered mobile"
          value={additionalField}
          onChange={(e) => setAdditionalField(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgetPassword;
