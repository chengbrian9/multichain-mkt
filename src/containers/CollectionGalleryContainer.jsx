import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NFTCard from '../components/NFTCard.jsx';
import { useParams } from 'react-router-dom';

const CollectionGalleryContainer = ({ name }) => {

  const [ data, setData ] = useState([])
  // let { name } = useParams();
  console.log(name)
  const gridStyle = {
    display: "grid", 
    gridTemplateColumns: "400px 400px 400px", 
    gridTemplateRows: "auto", 
    justifyContent: "center", 
    justifyItems: "center"
  }
  useEffect(() => {
    //grab nft data from selected collection
    axios.get(`https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/nfts_filtered?startInclusive=0&endExclusive=25&nft_filter_string={"collection":"${name}"}`, {
    }) 
    .then(data => {
      console.log('data', data.data.result.nfts)
      setData(data.data.result.nfts)
    })
    .catch(err => console.log(err))
    
  }, [ name ]);
    

  return (
    <div style={gridStyle}>
      {data.length > 0 ? data.map((el, index) => <NFTCard key={index} data={el} />) : <div style={{display: "flex", justifyContent: "center"}}><p>There are no NFTs listed for this collection... </p></div>}
    </div>
  )
}

export default CollectionGalleryContainer;