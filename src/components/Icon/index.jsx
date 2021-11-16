import { Icon as ChakraIcon } from '@chakra-ui/icon';
import React from 'react';

import Icons from '../../assets/icons/sprite.svg';

function Icon({ name, color, size }) {
  return (
    <ChakraIcon color={color} boxSize={size}>
      <use xlinkHref={Icons + `#${name}`} fill="currentColor" />
    </ChakraIcon>
  );
}

export default Icon;
