import React, { useState } from 'react';
import HomeGalleryContainer from '../containers/HomeGalleryContainer';
import SelectMenu from '../components/SelectMenu';

const Home = ({ chain, setChain }) => {
  
  return (
    <div>
      <div style={{textAlign: "center"}}> 
        <h1>The Multichain Marketplace</h1>
        <h2> Powered by FTX </h2> 
        <h2>Browse Collections...</h2>
        {/* <SelectMenu chain={chain} setChain={setChain}/> */}
      </div>
      <HomeGalleryContainer chain={chain}/>
    </div>
  )
}

export default Home;