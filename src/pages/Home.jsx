import React from 'react';
import HomeGalleryContainer from '../containers/HomeGalleryContainer';
import SelectMenu from '../components/SelectMenu';

const Home = () => {

  return (
    <div>
      <div style={{textAlign: "center"}}> 
        <h1>The Multichain Marketplace</h1>
        <h2> Powered by FTX </h2> 
        <h2>Browse Collections...</h2>
        <SelectMenu />
      </div>
      <HomeGalleryContainer />
    </div>
  )
}

export default Home;