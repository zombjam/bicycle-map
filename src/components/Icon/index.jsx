import { Icon as ChakraIcon } from '@chakra-ui/icon';
import React from 'react';

import Icons from '../../assets/icons/sprite.svg';

const Icon = ({ name, color, size, ...rest }) => {
  return (
    <ChakraIcon color={color} boxSize={size} {...rest}>
      <use xlinkHref={Icons + `#${name}`} fill="currentColor" style={{ width: '100%', height: '100%' }} />
    </ChakraIcon>
  );
};

// eslint-disable-next-line no-lone-blocks
{
  /* <Icon name="clock" size="10" color="primary.400" />
<Icon name="food" size="10" color="primary.400" />
<Icon name="menu" size="10" color="primary.400" />
<Icon name="phone" size="10" color="primary.400" />
<Icon name="search" size="10" color="primary.400" />
<Icon name="sort-down" size="10" color="primary.400" />
<Icon name="web" size="10" color="primary.400" />
<Icon name="crosshairs" size="10" color="primary.400" />
<Icon name="travel" size="10" color="primary.400" />
<Icon name="parking" size="10" color="primary.400" />
<Icon name="road" size="10" color="primary.400" />
<Icon name="map" size="10" color="primary.400" />
<Icon name="heart-solid" size="10" color="primary.400" />
<Icon name="heart-line" size="10" color="primary.400" />
<Icon name="bike" size="10" color="primary.400" /> */
}

export default Icon;
