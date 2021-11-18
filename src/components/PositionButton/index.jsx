import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import Icon from '../Icon';

const PositionButton = () => {
  return (
    <Tooltip label="點擊定位" hasArrow bg="accent.400" mt={1}>
      <IconButton
        arial-label="點擊定位"
        isRound
        size="lg"
        bg="primary.400"
        icon={<Icon name="crosshairs" size="6" color="white" />}
        _hover={{ bg: 'primary.500' }}
        _disabled={{ bg: 'gray.300' }}
        _active={{ bg: 'primary.400', borderColor: 'primary.500', borderWidth: '3px' }}
        _focus={{ bg: 'primary.400', borderColor: 'primary.500', borderWidth: '3px' }}
        boxShadow="base"
      />
    </Tooltip>
  );
};
export default PositionButton;
