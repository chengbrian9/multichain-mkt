import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NFTCard from '../components/NFTCard.jsx';
import { useParams } from 'react-router-dom';

const CollectionGalleryContainer = ({ name }) => {
  const [ isErr, setErr ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState([])
  
  const gridStyle = {
    display: "grid", 
    gridTemplateColumns: "400px 400px 400px", 
    gridTemplateRows: "auto", 
    justifyContent: "center", 
    justifyItems: "center",
    marginTop: 55
  }
  useEffect(() => {
    //grab nft data from selected collection
    axios.get(`https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/nfts_filtered?startInclusive=0&endExclusive=25&nft_filter_string={"collection":"${name}"}`, {
    }) 
    .then(data => {
      setData(data.data.result.nfts);
      setIsLoading(false);
    })
    .catch(err => {
      console.log(err);
      setErr(true);
    })
    
  }, [ name ]);
  
  if (isLoading) {
    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: 250}}>
        <p>Loading...</p>
      </div>
    )
  }

  if (isErr) {
    return (
      <div>
        There was an error! :/
      </div>
    )
  }

  return (
    <div style={gridStyle}>
      {data.length > 0 ? data.map((el, index) => <NFTCard key={index} data={el} />) : <div style={{display: "flex", justifyContent: "center"}}><p>There are no NFTs listed for this collection... </p></div>}
    </div>
  )
}

export default CollectionGalleryContainer;