import React from 'react';
import { Flex, AspectRatio, VStack } from '@chakra-ui/react';

import SearchBar from '../SearchBar';
import VehicleCard from './VehicleCard';

const SearchVehicles = () => {
  return (
    <AspectRatio w={['425px']} ratio={9 / 17.5}>
      <Flex
        flexDirection="column"
        justify="flex-start !important"
        alignItems="stretch !important"
        w={['425px']}
        px={3.5}
        pb={7}
        bg="white"
        boxShadow="base"
        rounded="lg"
      >
        <SearchBar />
        <VStack
          flex="1"
          h="full"
          overflowY="auto"
          px={3.5}
          spacing={5}
          sx={{
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              bg: 'gray.400',
              borderRadius: '1rem',
            },
          }}
        >
          {/* <VehicleCard /> */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
            <VehicleCard key={item} />
          ))}
        </VStack>
      </Flex>
    </AspectRatio>
  );
};
export default SearchVehicles;
