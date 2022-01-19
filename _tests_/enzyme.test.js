import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Link } from 'react-router-dom';

import HomeGalleryContainer from '../src/containers/HomeGalleryContainer'
import CollectionCard from '../src/components/CollectionCard'
import Home from '../src/pages/Home'
import Header from '../src/components/Header'
import Collection from '../src/pages/Collection'
import CollectionGalleryContainer from '../src/containers/CollectionGalleryContainer'
import App from '../src/pages/App'
import NFTCard from '../src/components/NFTCard'

configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders correctly', () => {
    shallow(<App/>)
  })
})

describe('Nav bar', () => {
  let wrapped = shallow(<Header />)
  it('should render 3 links', () => {
    expect(wrapped.find(Link).at(0).props().to).toBe('/');
    expect(wrapped.find(Link).at(1).props().to).toBe('/');
    expect(wrapped.find(Link).at(2).props().to).toBe('/about');
  })
})

describe('Home', () => {
  let wrapper = shallow(<Home />)
  it('should render title', () => {
    expect(wrapper.find('h1').text()).toEqual('The Multichain Marketplace');
    expect(wrapper.find('h2').at(0).text()).toEqual(' Powered by FTX ');
    expect(wrapper.find('h2').at(1).text()).toEqual('Browse Collections...');
  })
  it('should render HomeGallery Container', () => {
    expect(wrapper.containsMatchingElement(<HomeGalleryContainer/>)).toEqual(true);
  })
})

describe('Collection', () => {
  let wrapper = shallow(<Collection/>);
  it('should render loading msg & no children on mount', () => {
    expect(wrapper.containsMatchingElement(<CollectionGalleryContainer/>)).toEqual(false);
    expect(wrapper.find('#collectiondDesc')).toEqual({})
    expect(wrapper.find('div').text()).toEqual('Loading...');
  })
})


describe('HomeGalleryContainer', () => {
  let wrapper;
  const props = {
    isErr: false,
    collectionInfo: [],
    isLoading: true
  };

  beforeAll(() => {
    wrapper = shallow(<HomeGalleryContainer {...props} />)
  })

  it('should render loading msg on mount & no children', () => {
    expect(wrapper.find('div').text()).toEqual('Loading...');
    expect(wrapper.containsMatchingElement(<CollectionCard/>)).toEqual(false);
  })
})

describe('CollectionGalleryContainer', () => {
  let wrapper = shallow(<CollectionGalleryContainer />)
  it('should render text on mount & no children', () => {
    expect(wrapper.find('p')).toHaveLength(1)
    expect(wrapper.containsMatchingElement(<NFTCard/>)).toEqual(false);
  })
})

// describe('CollectionCard', () => {
//   let wrapper = shallow(<CollectionCard/>)
//   it('should have a link to collection', () => {
//     expect(wrapper.find(Link)).toHaveLength(1);
//   })
// })

// describe('NFTCard', () => {
//   let wrapper = shallow(<NFTCard/>)
//   it('')
// })

