import React from 'react';

import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import  './App.css';
const App = () => {
  return (
    <div className='App'>
<h1>TO DO App</h1>
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
    
    </div>
  
  );
};

export default App;
