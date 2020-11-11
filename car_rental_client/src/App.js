import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import SingleCar from './pages/SingleCar';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/auth-option/Register';
import UserContext from './context/UserContext';
import Login from './components/auth-option/Login';


function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });


  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = '';
      };

      const tokenRes = await axios.post(
        "http://localhost:3000/users/tokenIsValid", null, { headers: { "x-auth-token": token } }

      );

      if (tokenRes.data) {

        const userRes = await axios.get("http://localhost:3000/users/", { headers: { "x-auth-token": token }, });
        setUserData({
          token,
          user: userRes.data,
        });
      };
    }
    checkLoggedIn()
  }, [])
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/cars" component={Cars} />
          <Route path="/cars/:search_car" component={SingleCar} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route component={ErrorPage} />

        </Switch>
      </UserContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;