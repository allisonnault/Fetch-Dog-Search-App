import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import Favorites from './components/Favorites';
import Login from './components/Login';
import './App.css';

function App() {
  return (
<BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path='/search' Component={Search}/>
      <Route exact path='/favorites' Component={Favorites} />
      <Route exact path='/' Component={Login}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
