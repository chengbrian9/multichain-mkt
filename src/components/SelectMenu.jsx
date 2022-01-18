import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react';

const SelectMenu = ({ setChain }) => {

  function handleSelect(e) {
    setChain(e)
  }

return (
  <DropdownButton
  title="Select Chain"
  onSelect={handleSelect}
  style={{paddingTop: 15, paddingBottom: 15}}
    >
          <Dropdown.Item eventKey="all"> All </Dropdown.Item>
          <Dropdown.Item eventKey="eth"> ETH </Dropdown.Item>
          <Dropdown.Item eventKey="sol"> SOL </Dropdown.Item>
          <Dropdown.Divider />
  </DropdownButton>
)

}

export default SelectMenu;