import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import Login from './components/Login';
import Match from './components/Match';
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
<BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path='/search' Component={Search}/>
      <Route exact path='/match/:id' Component={Match} />
      <Route exact path='/' Component={Login}/>
      <Route exact path='/logout' Component={Logout}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
