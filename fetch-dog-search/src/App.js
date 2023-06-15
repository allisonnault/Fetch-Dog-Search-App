import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Search from './components/Search';
import Login from './components/login';

function App() {
  return (
<BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path='/dogs/breeds' Component={Search}/>
      <Route exact path='/' Component={Login}/>
    </Routes>
</BrowserRouter>
  );
}

export default App;
