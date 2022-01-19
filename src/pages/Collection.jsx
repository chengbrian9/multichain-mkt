import React, { useEffect, useState } from 'react';
import CollectionGalleryContainer from '../containers/CollectionGalleryContainer';
import { useParams } from 'react-router-dom';
import Social from '../components/Social';
import Stats from '../components/Stats';
import axios from 'axios';

const Collection = ({chain}) => {

  let { id } = useParams()
  let num = parseInt(id)

  const [ colData, setColData ] = useState(null);

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://ftx.us/api/nft/collections_page', {
      params: {
        'startInclusive': num,
        'endExclusive': num + 1,
        'collectionType': `eth`
      }
    })
    .then(data => {
      setColData(data.data.result.collections[0])
    })
    .catch(err => console.log(err))
  }, [ num ]); 

  const collectionImgStyle = {
    display: "inline-block",
    border: "double",
    borderRadius: "50%",
    height: 150,
    width: 150,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    overflow: "hidden",
    zIndex: 2
  }
  const bannerStyle = {
    height: "100%",
    width: "100%",
  }
  const horizontalStyle = {
    display: "flex", 
    justifyContent: "center", 
    flexDirection: "row", 
    alignItems: "center"
  }
    
  if (!colData) {
    return (
      <div style={{display: "flex", justifyContent: "center", marginTop: 250}}>
        Loading...
      </div>
    )
  }

  let dict = colData.collectionDict 
  let banner = dict.bannerImageUrl
  let twitter = dict.twitterUrl
  let discord = dict.discordUrl
  let site = dict.homepageUrl
  let desc = dict.description
  let collectionImg = dict.avatarImageUrl
  
  let issuer = colData.issuer
  let owner = issuer.issuer
  let isVerified = issuer.isVerified
  let socialsLinks = [twitter, discord, site]
  let count = "Total: " + colData.total
  let vol = Math.floor(colData.volume) + " USD"
  let statsData = [vol, count]
  let socials = socialsLinks.map((x, index) => <Social key={index} socialLink={x}/>)
  let stats = statsData.map((x, index) => <Stats style={{border: "1px"}} key={index} data={x} />)
  const defaultBanner = 'https://a.scpr.org/i/d0bbbb3ec1a6cf86090c6fe2d9128082/141881-full.jpg'
  const defaultPfp = 'https://a.scpr.org/i/d0bbbb3ec1a6cf86090c6fe2d9128082/141881-full.jpg'
  const defaultDesc = 'This is the default description'
  
  return (
    <div>
      { colData && 
      <>
       <div style={{display: "flex", minHeight: 130, maxHeight: 350 , height: "25%", overflow: "hidden", position: "relative", zIndex: 1 }}>
        <img src={banner ? banner : defaultBanner} style={bannerStyle} alt='banner'/>
      </div>
        <div id='collectionDesc' style={{positon: "relative", marginTop: -75}}>
          <div style={{display: "flex", justifyContent: "center"}}>
            <img src={collectionImg ? collectionImg : defaultPfp} style={collectionImgStyle} alt='pfp' />
          </div>

        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
          <h1 style={{marginBottom: -10}}>{dict.name}</h1>
          <p>by {owner}   
          {isVerified &&  <img src='/favicon.ico' height='25px' width='25px' style={{ marginLeft: 5}} alt='verified'/> }</p>
        </div>
        
        <div style={horizontalStyle}>
          {socials} 
        </div>
        <div style={horizontalStyle}>
          {stats} 
        </div>
        
        <div style={{display: "flex", justifyContent: "center"}}>
          <p style={{textAlign: "center", width: "65%"}}>{desc ? desc : defaultDesc}</p>
        </div>
      </div> 
     <CollectionGalleryContainer name={dict.name}/>
    </>
  }
  </div>
  )
}

export default Collection;