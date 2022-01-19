import logo from '../logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import React, { useState } from 'react';
import Header from '../components/Header';
import About from '../pages/About';

function App() {
  // const [ chain, setChain ] = useState('all')
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path='/' 
            element={<Home/>}>
          </Route>
          <Route 
            path='/:name/:id' 
            element={<Collection/>}>
          </Route>
          <Route
            path='/about'
            element={<About/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
