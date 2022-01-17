
import React from 'react';



const NFTCard = ({ index, galleryId, data }) => {

  const name = data.name
  const pfp = data.imageUrl
  const price = data.offerPrice

  return (
    <div id='grid'>
      <div id='card'>
        <div>
          <img className='cardImg' src={pfp} width="250" height="250" alt='img' />
        </div>
        <div>
          <p id='cardTxt'>{name}</p>
          <p>{price} ETH</p>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;
