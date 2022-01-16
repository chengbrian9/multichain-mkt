import React from 'react';
import GalleryContainer from '../containers/HomeGalleryContainer';

const Home = ({ galleryId, setGalleryId, setCollectionInfo, collectionInfo }) => {

  return (
    <div>
      <div id="header"> 
        <h1>The Multichain Marketplace T</h1>
        <h2> Powered by FTX </h2> 
        <h2>Browse Collections...</h2>
      </div>
      <GalleryContainer galleryId={galleryId} setCollectionInfo={setCollectionInfo} collectionInfo={collectionInfo} setGalleryId={setGalleryId} />
    </div>
  )
}

export default Home;