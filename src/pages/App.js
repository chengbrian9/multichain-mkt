import logo from '../logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from './Home';
import Collection from './Collection';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

function App() {
  const [ galleryId, setGalleryId ] = useState(0)
  const [ collectionInfo , setCollectionInfo ] = useState([]) 

  useEffect(() => {
    async function grabData() {
      await axios.get('https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/collections_page', {
        params: {
          'startInclusive': 0,
          'endExclusive': 15,
          'collectionType': 'eth'
        }
      }) 
      .then(data => {
        console.log('ran grabData', data.data.result.collections)
        setCollectionInfo([...data.data.result.collections])
       })
      .catch(err => console.log(err))
    } grabData();
  }, [ setGalleryId, setCollectionInfo ]);

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route 
            path='/' 
            element={<Home
              galleryId={galleryId} 
              setGalleryId={setGalleryId} 
              collectionInfo={collectionInfo} />}>
          </Route>
          <Route 
            path='/collections/:galleryId' 
            element={<Collection 
              setGalleryId={setGalleryId} 
              collectionInfo={collectionInfo[galleryId]} 
              galleryId={galleryId}/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
