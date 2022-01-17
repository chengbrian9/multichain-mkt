import React, { useState, useEffect } from 'react';


const Social = ({ socialLink }) => {

  const [ clicked, setClicked ] = useState(false) 
  
  useEffect(() => {
    if (clicked) {
      window.open(`${socialLink}`)
    }
  })

  return (
     <div>
      <button>
        <img src='/icons8-twitter.svg' alt='logo' onClick={() => setClicked(!clicked)} />
      </button>
    </div>
  )
}

export default Social;