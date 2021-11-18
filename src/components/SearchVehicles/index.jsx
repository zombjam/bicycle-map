import React from 'react';
import { VStack, AspectRatio } from '@chakra-ui/react';

import SearchBar from '../SearchBar';

const SearchVehicles = () => {
  return (
    <AspectRatio w={['425px']} h="87.5vh" ratio={8 / 16}>
      <VStack justify={'flex-start !important'} w={['425px']} h="full" px={4} pb={5} bg="white" boxShadow="base" rounded="lg">
        <SearchBar />
      </VStack>
    </AspectRatio>
  );
};
export default SearchVehicles;
