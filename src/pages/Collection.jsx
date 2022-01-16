import React from 'react';
import CollectionGalleryContainer from '../containers/CollectionGalleryContainer';
import { useParams } from 'react-router-dom';

const Collection = ({ collectionInfo, galleryId, setGalleryId }) => {
  let params = useParams();

  return (
    <div>
     <CollectionGalleryContainer 
        collectionInfo={collectionInfo} 
        galleryId={params.galleryId} 
        setGalleryId={setGalleryId}/>
    </div>
  )
}

export default Collection;