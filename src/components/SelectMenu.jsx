import { Select } from '@chakra-ui/react';
import React from 'react';

const SelectMenu = () => {

return (
  <Select placeholder='Select chain' variant='flushed' size='lg'>
    <option value='all'>All</option>
    <option value='eth'>ETH</option>
    <option value='sol'>SOL</option>
  </Select>
)

}

export default SelectMenu;