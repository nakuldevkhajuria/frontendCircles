import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Dashboard from './Components/Dashboard/Dashboard';
import  './App.css'
const App = () => {
  return (
    <>fdf

    <Register/>   
    <Login/>
  <ForgetPassword/>

   
       {/* <Router>
       <Routes>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
       <Route exact path="/forget-password/:mobile" component={ForgetPassword} />
      </Routes>
    </Router> */}
    
    </>
  
  );
};

export default App;
