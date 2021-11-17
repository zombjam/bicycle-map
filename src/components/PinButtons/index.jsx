import React from 'react';
import { Wrap, WrapItem, Button, Text } from '@chakra-ui/react';
import Icon from '../Icon';

const PinButtons = ({ buttons }) => {
  //
  return (
    <Wrap display="inline-flex" boxShadow="4px 4px 20px rgba(118, 118, 118, 0.3)" bg="white" px={3} py={2} rounded="full">
      {buttons.map(btn => (
        <WrapItem>
          <Button
            bg="white"
            color="primary.400"
            rounded="full"
            isActive={btn.isActive}
            _active={{ bg: 'primary.400', color: 'white' }}
            _focus={{ boxShadow: '0 0 1px 2px #A4B375, 0 0 2px 2px #A4B375' }}
            leftIcon={<Icon name={btn.icon} color="currentColor" size={5} />}
          >
            <Text fontSize="lg">{btn.name}</Text>
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
};
export default PinButtons;
