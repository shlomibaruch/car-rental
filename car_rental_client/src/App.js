import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import SingleCar from './pages/SingleCar';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cars" component={Cars} />
        <Route path="/cars/:search_car" component={SingleCar} />
        <Route component={ErrorPage} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;