import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/App.css';

const CollectionCard = ({ index, collectionInfo }) => {
  
  const name = collectionInfo.group_id
  const pfp = collectionInfo.first_nft.imageUrl
  
  const cardStyle = {
    display: "grid",
    width: 250,
    height: 250,
    justifyContent: "center",
    justifyItems: "center",
    margin: "25px 25px 25px 25px",
    backgroundColor: "rgb(71, 71, 71)",
    borderRadius: 10,
    marginBottom: "8rem"
  }

  const cardImgStyle = {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: "100%",
    backgroundColor: "transparent",
    borderColor: "transparent",
    padding: "0px 0px 0px 0px",
    borderWidth: 0
  }

  const cardTxtStyle = {
    width: "100%",
    marginTop: "0.5rem",
    borderRadius: 10,
    height: 50,
    fontFamily: "Rubik, sans-serif",
    fontWeight: 400,
    color: "white",
    borderWidth: 0,
    background: "linear-gradient(90deg, rgba(18,151,178,1) 0%, rgba(10,181,204,1) 39%, rgba(199,20,55,1) 100%)"
  }

  return (
    <div>
      <div style={cardStyle}>
        <div className='cardWrap'>
        <Link to={`/${collectionInfo.group_id}/${index}`}>
          <button style={cardImgStyle} >
            <img style={{borderRadius: 10}} src={pfp} width="250" height="250" alt='img' />
          </button>
            {/* <p>{price}</p><img src={price} /> */}
          <button style={cardTxtStyle}>
            {name}
          </button>
        </Link> 
        </div>
      </div>
    </div>
  )
}

export default CollectionCard;
