import React from 'react';

import { VStack, HStack, Box, Text, Skeleton, Tag } from '@chakra-ui/react';
import { Icon } from 'components';

const SpotCard = ({ vehicle }) => {
  return (
    <VStack w="full" alignItems="flex-start" pb={5} spacing={3} borderBottom="1px" borderColor="gray.300">
      {true ? (
        <>
          <Skeleton startColor="gray.300" endColor="gray.200" height="155px" rounded="lg" width="100%" />
          <Box display="flex" alignItems="center" w="full" spacing={6} justifyContent={'space-between'}>
            <Text color="primary.500" flex="1" fontSize="22px" fontWeight="500" lineHeight="27px" isTruncated>
              我是景點我是景點我是景點我是景點我是景點
            </Text>
            <Box color="gray.400" fontWeight="500">
              <Icon name="map" color="gray.400" mr="1" mt="-2px" />
              台北市
            </Box>
          </Box>
          <Box display="flex" w="full" alignItems="flex-start" justify="space-between">
            <HStack flex="1" spacing={0.5} mx={-1} my={-1} flexWrap="wrap">
              {['遊憩類', '都會公園類'].map(tag => (
                <Tag key={tag} mx={0.5} my={1} bg="primary.400" color="white" px={3} py={2} rounded="20px">
                  {tag}
                </Tag>
              ))}
            </HStack>
            <Icon name="web" color="primary.300" w={7} h={7} p={1} rounded="full" border="1px" borderColor="primary.300" cursor="pointer" />
          </Box>
        </>
      ) : (
        <>
          <Skeleton startColor="gray.300" endColor="gray.200" height="155px" rounded="lg" width="100%" />
          <HStack w="full" spacing={6}>
            <Skeleton startColor="gray.300" endColor="gray.200" rounded="lg" height="72px" width="100%" />
            <Skeleton startColor="gray.300" endColor="gray.200" rounded="lg" height="72px" width="100%" />
          </HStack>
        </>
      )}
    </VStack>
  );
};

export default SpotCard;
