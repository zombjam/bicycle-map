import React, { useEffect } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { PositionButton, PinButtons, Map, SearchVehicles } from 'components';

// import { getBikeStation } from 'api';

const Home = () => {
  useEffect(() => {
    // getBikeStation({ $spatialFilter: 'nearby(25.03746,121.564558,1000)' }).then(res => {
    //   console.log(res);
    // });
  });

  return (
    <>
      <Box w="max-content" position="absolute" top={['36px']} left={['32px']} m="0 auto" zIndex={9999}>
        <SearchVehicles />
      </Box>
      <Box w="max-content" position="absolute" top={['36px']} left={['477px']} zIndex={9999}>
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
