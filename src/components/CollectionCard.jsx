import React from 'react';
import { Link } from 'react-router-dom';

const CollectionCard = ({ galleryId, index, setGalleryId, collectionInfo }) => {
  
  const name = collectionInfo.group_id
  const pfp = collectionInfo.first_nft.imageUrl

  function changePages() {
    setGalleryId(index)
    console.log('changed to', index)
  }

  return (
    <div id='grid'>
      <div id='card'>
        <div className='cardWrap'>
        <Link to={`/collections/${galleryId}`}>
          <button className='cardImg' >
            <img className='nftCover' onClick={()=> changePages()} src={pfp} width="250" height="250" alt='img' />
          </button>
            {/* <p>{price}</p><img src={price} /> */}
          <button className='cardTxt' onClick={()=> changePages()}>
            {name}
          </button>
        </Link> 
        </div>
      </div>
    </div>
  )
}

export default CollectionCard;
