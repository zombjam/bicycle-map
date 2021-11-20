import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { PositionButton, Map, SearchRoad } from 'components';

const Road = () => {
  return (
    <>
      <Box w="max-content" position="absolute" top={['36px']} left={['32px']} m="0 auto" zIndex={9999}>
        <SearchRoad />
      </Box>
      <Box w="max-content" position="absolute" top={['36px']} left={['477px']} zIndex={9999}>
        <HStack spacing={3}>
          <PositionButton />
        </HStack>
      </Box>
      <Map />
    </>
  );
};

export default Road;
