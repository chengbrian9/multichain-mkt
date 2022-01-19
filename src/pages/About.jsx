import React from 'react';


const About = () => {
  
  return (
    <div>
      <h1>The Multichain Marketplace</h1>

      <p>A NFT marketplace front-end webapp powered by FTX's NFT API. The Multichain Marketplace is a take home project for FTX US. </p>


      <h2>Considerations/Implementation</h2>

      <li> View up to 25 different NFT Collections </li>
      <li> View up to 25 listed NFTs, listing prices, and collection stats/links</li>
      <li> Used dynamic routing using React Router V6 so the selected collection can maintain it's state as the page changes, as well as if the page is refreshed</li>
      <li> Retrieve only unique collections on Marketplace Home to avoid duplicates using a Map data structure</li>
      <li> Default pictures for collection banner/PFP/description if none available from the API endpoint </li>
      <li> Prevent emoji rendering for individual NFT names using RegEx</li>
      <li> Implemented loading and error states</li>

      <h2>Stretch Features</h2>

      <li> Filter collections by chain/sorting within a collection</li>

      <li> Search by collection name </li>

      <li>More caching via localStorage to minimize API calls </li>

      <li> Data encoding to prevent XSS attacks </li>

      <li> Trading volume USD to ETH conversion using ethers.js or API market data  </li>

      <li> Responsive Styling (branding + animations + filling in imgs)</li>
    </div>
  )
}

export default About;