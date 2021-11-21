import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { PositionButton, PinButtons, Map, SearchVehicles } from 'components';

const Home = () => {
  return (
    <>
      <Box w="max-content" position="absolute" top={['36px']} left={['32px']} m="0 auto" zIndex="999">
        <SearchVehicles />
      </Box>
      <Box w="max-content" position="absolute" top={['36px']} left={['477px']} zIndex="999">
        <HStack spacing={3}>
          <PinButtons
            buttons={[
              { name: '找單車', icon: 'bike', isActive: true },
              { name: '找車位', icon: 'parking', isActive: false },
            ]}
          />
          <PositionButton />
        </HStack>
      </Box>
      <Map />
    </>
  );
};
export default Home;
