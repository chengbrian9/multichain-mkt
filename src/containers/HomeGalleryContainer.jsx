import React, { useEffect, useState }  from 'react';
import CollectionCard from '../components/CollectionCard.jsx';
import axios from 'axios';

const HomeGalleryContainer = () => {
  const [ isErr, setErr ] = useState(false);
  const [ collectionInfo , setCollectionInfo ] = useState([]);

  useEffect(() => { 
    axios.get('https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/collections_page', {
        params: {
          'startInclusive': 0,
          'endExclusive': 25,
          'collectionType': 'eth'
        }
    })
     //filter out duplicate collections
     .then(data => {
      let dataArr = data.data.result.collections
      let uniqueVals = new Map();
      dataArr.forEach(x => uniqueVals.set(x.group_id, x))
      return uniqueVals
    })
    //set state to unique collection data
    .then(data => setCollectionInfo(Array.from(data).map(x => x[1])))
    .catch(err => {
      console.log(err)
      setErr(true)
    })
  }, [ setCollectionInfo ]);

  if (!collectionInfo) {
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
    <div style={{display: "grid", gridTemplateColumns: "400px 400px 400px", gridTemplateRows: "auto", justifyContent: "center", justifyItems: "center"}}>
      {collectionInfo.map((x, index) => <CollectionCard key={index} index={index} collectionInfo={collectionInfo[index]} />)}
    </div>
  )
}

export default HomeGalleryContainer;