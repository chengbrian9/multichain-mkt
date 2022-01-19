
# The Multichain Marketplace

A NFT marketplace front-end webapp powered by FTX's NFT API. The Multichain Marketplace is a take home project for FTX US. 


## Considerations/Implementation

- View up to 25 different NFT Collections
- View up to 25 listed NFTs, listing prices, and collection stats/links
- Used dynamic routing using React Router V6 so the selected collection can maintain it's state as the page changes, as well as if the page is refreshed
- Retrieve only unique collections on Marketplace Home to avoid duplicates using a Map data structure
- Default pictures for collection banner/PFP/description if none available from the API endpoint 
- Prevent emoji rendering for individual NFT names using RegEx
- Implemented loading and error states




## Run Locally

Clone the project

```bash
  git clone https://github.com/chengbrian9/multichain-mkt.git
```

Go to the project directory

```bash
  cd multichain-mkt
```

Install dependencies

```bash
  npm install
```
Get temporary proxy access by visiting: 

  https://cors-anywhere.herokuapp.com/corsdemo


Start the server

```bash
  npm run start
```


## Low Fidelity Mockup

https://www.figma.com/file/QXtYEPY9FEJbLPf37VuEYk/Untitled?node-id=0%3A1

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Stretch Features

- Filter collections by chain/sorting within a collection

- Search by collection name 

- More caching via localStorage to minimize API calls 

- Data encoding to prevent XSS attacks 

- Trading volume USD to ETH conversion using ethers.js or API market data  

- Responsive Styling (branding + animations + filling in imgs)