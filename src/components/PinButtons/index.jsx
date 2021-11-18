import React from 'react';
import { Wrap, WrapItem, Button, Text } from '@chakra-ui/react';
import Icon from '../Icon';

const PinButtons = ({ buttons }) => {
  //
  return (
    <Wrap display="inline-flex" boxShadow="base" bg="white" px={3} py={2} rounded="full">
      {buttons.map(btn => (
        <WrapItem key={btn.name}>
          <Button
            bg="white"
            color="primary.400"
            rounded="full"
            isActive={btn.isActive}
            _active={{ bg: 'primary.400', color: 'white' }}
            _focus={{ boxShadow: 'primary' }}
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
