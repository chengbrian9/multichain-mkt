import logo from '../logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import React from 'react';
import Header from '../components/Header';

function App() {
  
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
            path='/:name/:galleryId' 
            element={<Collection />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
