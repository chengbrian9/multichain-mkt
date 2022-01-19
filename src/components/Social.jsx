import React, { useState, useEffect } from 'react';


const Social = ({ socialLink }) => {

  const [ clicked, setClicked ] = useState(false) 
  
  useEffect(() => {
    if (clicked) {
      window.open(`${socialLink}`)
      setClicked(!clicked)
    }
  }, [clicked, setClicked, socialLink])

  return (
     <div>
      <button style={{margin: "10px 10px 10px 10px"}}>
        <img src='/icons8-twitter.svg' alt='logo' onClick={() => setClicked(!clicked)} />
      </button>
    </div>
  )
}

export default Social;