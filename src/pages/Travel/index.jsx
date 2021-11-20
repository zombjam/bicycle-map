import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { PositionButton, PinButtons, Map, SearchScenicSpot } from 'components';

const Travel = () => {
  return (
    <>
      <Box w="max-content" position="absolute" top={['36px']} left={['32px']} m="0 auto" zIndex={9999}>
        <SearchScenicSpot />
      </Box>
      <Box w="max-content" position="absolute" top={['36px']} left={['477px']} zIndex={9999}>
        <HStack spacing={3}>
          <PinButtons
            buttons={[
              { name: '找景點', icon: 'travel', isActive: true },
              { name: '找餐廳', icon: 'food', isActive: false },
            ]}
          />
          <PositionButton />
        </HStack>
      </Box>
      <Map />
    </>
  );
};

export default Travel;
