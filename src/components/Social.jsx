import React, { useState, useEffect } from 'react';


const Social = ({ socialLink, social }) => {

  const [ clicked, setClicked ] = useState(false) 
  
  useEffect(() => {
    if (clicked) {
      window.open(`${socialLink}`)
      setClicked(!clicked)
    }
  }, [clicked, setClicked, socialLink])

  return (
     <div>
      <button style={{margin: "10px 10px 10px 10px", background: "transparent", borderColor: "transparent"}}>
        <img src={social} style={{width: 25, height: 25}}alt='logo' onClick={() => setClicked(!clicked)} />
      </button>
    </div>
  )
}

export default Social;