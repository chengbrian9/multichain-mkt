import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NFTCard from '../components/NFTCard.jsx'

const CollectionGalleryContainer = ({ collectionInfo, setListed, galleryId }) => {
  const [ data, setData ] = useState([])
 
    useEffect(() => {
      //grab nft data from selected collection
      axios.get(`https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/nfts_filtered?startInclusive=0&endExclusive=25&nft_filter_string={"collection":"${collectionInfo.group_id}"}`, {
      }) 
      .then(data => {
        console.log('data', data.data.result.nfts)
        setData(data.data.result.nfts)
      })
      .catch(err => console.log(err))
      
    }, [ collectionInfo ]);
    

  return (
    <div className='item-grid'>
      {data.length > 0 ? data.map((el, index) => <NFTCard key={index} data={el} />) : 'There are no NFTs listed for this collection :('}
    </div>
  )
}

export default CollectionGalleryContainer;