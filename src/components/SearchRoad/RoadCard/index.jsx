import React from 'react';
import { VStack, HStack, Box, Text, Skeleton } from '@chakra-ui/react';
import { Icon } from 'components';

const RoadCard = ({ road }) => {
  return (
    <VStack w="full" alignItems="flex-start" pb={5} spacing={3} borderBottom="1px" borderColor="gray.300">
      {true ? (
        <>
          <Box display="flex" alignItems="center" w="full" spacing={6} justifyContent={'space-between'}>
            <Text color="primary.500" flex="1" fontSize="22px" fontWeight="500" lineHeight="27px" isTruncated>
              我是路線我是路線我是路線我是路線我是路線
            </Text>
            <Box color="gray.500" fontWeight="500">
              <Icon name="map" color="gray.500" mr="1" mt="-2px" />
              台北市
            </Box>
          </Box>
          <VStack w="full" spacing={3} position="relative">
            <HStack w="full" fontWeight="500" spacing={2}>
              <Box px={3} py={2} rounded="lg" bg="primary.100" color="primary.500">
                起
              </Box>
              <Box px={3} py={2} rounded="lg" bg="primary.100" color="primary.500" flex="1">
                承德路5段
              </Box>
            </HStack>
            <HStack w="full" fontWeight="500" spacing={2}>
              <Box px={3} py={2} rounded="lg" bg="primary.100" color="primary.500">
                迄
              </Box>
              <Box px={3} py={2} rounded="lg" bg="primary.100" color="primary.500" flex="1">
                承德路5段
              </Box>
            </HStack>
            <Box
              position="absolute"
              h="50%"
              left="-6px"
              top="50%"
              w="1px"
              bg="primary.500"
              mt="0 !important"
              transform="translateY(-50%)"
              sx={{
                '&:before': {
                  content: '""',
                  display: 'block',
                  width: '4px',
                  height: '4px',
                  borderWidth: '1px',
                  borderColor: 'primary.500',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '-4px',
                  left: '-1.5px',
                  transform: 'translateX(-0.5px)',
                },
                '&:after': {
                  content: '""',
                  display: 'block',
                  width: '4px',
                  height: '4px',
                  borderWidth: '1px',
                  borderColor: 'primary.500',
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '100%',
                  left: '-1.5px',
                  transform: 'translateX(-0.5px)',
                },
              }}
            ></Box>
          </VStack>
          <HStack
            display="flex"
            alignItems="center"
            justifyContent={'flex-end'}
            w="full"
            color="gray.500"
            mt={'8px !important'}
            spacing={1.5}
          >
            <Icon name="road" color="gray.500" mt={'1px'} />
            <Text fontWeight="500">總長3.4公里</Text>
          </HStack>
        </>
      ) : (
        <>
          <Skeleton startColor="gray.300" endColor="gray.200" height="27px" width="100%" />
          <HStack w="full" spacing={6}>
            <Skeleton startColor="gray.300" endColor="gray.200" rounded="lg" height="72px" width="100%" />
            <Skeleton startColor="gray.300" endColor="gray.200" rounded="lg" height="72px" width="100%" />
          </HStack>
        </>
      )}
    </VStack>
  );
};

export default RoadCard;
