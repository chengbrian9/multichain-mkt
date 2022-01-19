import React, { useState } from 'react';
import HomeGalleryContainer from '../containers/HomeGalleryContainer';
import SelectMenu from '../components/SelectMenu';

const Home = () => {
  
  return (
    <div>
      <div style={{textAlign: "center", paddingTop: 15}}> 
        <h1>The Multichain Marketplace</h1>
        <img src='/cube.gif' alt='cube'></img>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><h2> Powered by </h2> <img src='/mceclip1.png' style={{paddingLeft: 10, height: 35, width: 115}}alt='ftx'></img></div> 
        <h2>Browse Collections...</h2>

        {/* <SelectMenu chain={chain} setChain={setChain}/> */}
      </div>
      <HomeGalleryContainer />
    </div>
  )
}

export default Home;