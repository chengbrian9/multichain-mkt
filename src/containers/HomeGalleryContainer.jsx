import React  from 'react'
import CollectionCard from '../components/CollectionCard.jsx'

const GalleryContainer = ({ galleryId, collectionInfo, setCollectionInfo, setGalleryId }) => {
    
  return (
    <div className='item-grid'>
      {collectionInfo.map((x, index) => <CollectionCard galleryId={galleryId} key={index} index={index} collectionInfo={collectionInfo[index]} setGalleryId={setGalleryId}/>)}
    </div>
  )
}

export default GalleryContainer;