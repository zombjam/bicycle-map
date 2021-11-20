import React from 'react';

import { VStack, HStack, Box, Text, Skeleton, Tag } from '@chakra-ui/react';
import { Icon } from 'components';

const LABEL = {
  bike: '可租借',
  parking: '可停車',
};

function getStatus(count) {
  if (count > 5) {
    return { bg: 'primary.100', color: 'primary.500' };
  }
  if (count > 0) {
    return { bg: 'warn.100', color: 'warn.600' };
  }
  return { bg: 'gray.200', color: 'gray.400' };
}

function getStationStatus(status) {
  let label = '';
  let color = '';
  let borderColor = '';
  switch (status) {
    case 'status1':
      label = '可借可還';
      color = 'accent.500';
      borderColor = 'accent.300';
      break;
    case 'status2':
      label = '只可借車';
      color = 'warn.400';
      borderColor = 'accent.300';
      break;
    case 'status3':
      label = '只可停車';
      color = 'warn.400';
      borderColor = 'accent.300';
      break;
    case 'status4':
      label = '站點施工中';
      color = 'gray.400';
      borderColor = 'gray.300';
      break;
    default:
      break;
  }
  return { label, color, borderColor };
}

const CardCount = ({ icon, count }) => {
  const { bg, color } = getStatus(count);

  return (
    <VStack w="full" p={2} bg={bg} color={color} rounded="lg" spacing={1} fontWeight="500">
      <Box display="flex" pt={1}>
        <Icon name={icon} color={color} mr="1" />
        <Text lineHeight="1">{LABEL[icon]}</Text>
      </Box>
      <Text fontSize="3xl" lineHeight="32px">
        {count}
      </Text>
    </VStack>
  );
};

const StationTag = ({ status }) => {
  const { label, color, borderColor } = getStationStatus(status);

  return (
    <Tag color={color} borderWidth="1px" fontSize="md" borderColor={borderColor} bg="white" px={3} py={1.5}>
      {label}
    </Tag>
  );
};

const VehicleCard = ({ vehicle }) => {
  // console.log('vehicle: ', vehicle);
  return (
    <VStack w="full" alignItems="flex-start" pb={5} spacing={3} borderBottom="1px" borderColor="gray.300">
      {true ? (
        <>
          <Text color="primary.500" w="full" fontSize="22px" fontWeight="500" lineHeight="27px" isTruncated>
            我是站牌我是站牌我是站牌我是站牌我是站牌
          </Text>
          <HStack w="full" spacing={6}>
            <CardCount icon="bike" count={43} />
            <CardCount icon="parking" count={1} />
          </HStack>
          <HStack w="full" justify="space-between">
            <StationTag status="status1"></StationTag>
            <Box color="gray.500" fontWeight="500">
              <Icon name="map" color="gray.500" mr="1" mt="-2px" />
              距離25公尺
            </Box>
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

export default VehicleCard;
