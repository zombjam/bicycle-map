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
    case 'all':
      label = '可借可還';
      color = 'accent.500';
      borderColor = 'accent.300';
      break;
    case 'onlyRent':
      label = '只可借車';
      color = 'warn.400';
      borderColor = 'accent.300';
      break;
    case 'onlyReturn':
      label = '只可停車';
      color = 'warn.400';
      borderColor = 'accent.300';
      break;
    case 'maintain':
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
  const getStationStatus = () => {
    if (vehicle.ServiceStatus === 0 || vehicle.ServiceStatus === 2) {
      return 'maintain';
    }
    if (!vehicle.AvailableRentBikes && vehicle.AvailableReturnBikes > 0) {
      return 'onlyReturn';
    }
    if (!vehicle.AvailableReturnBikes && vehicle.AvailableRentBikes > 0) {
      return 'onlyRent';
    }
    return 'all';
  };

  return (
    <VStack w="full" alignItems="flex-start" pb={5} spacing={3} borderBottom="1px" borderColor="gray.300">
      {vehicle != null ? (
        <>
          <Text color="primary.500" w="full" fontSize="22px" fontWeight="500" lineHeight="27px" isTruncated>
            {vehicle.StationName}
          </Text>
          <HStack w="full" spacing={6}>
            <CardCount icon="bike" count={vehicle.AvailableRentBikes} />
            <CardCount icon="parking" count={vehicle.AvailableReturnBikes} />
          </HStack>
          <HStack w="full" justifyContent="space-between">
            <StationTag status={getStationStatus()}></StationTag>
            <Box color="gray.500" fontWeight="500">
              <Icon name="clock" color="gray.500" mr="1" mt="-2px" />
              更新時間:{vehicle.UpdateTime}
            </Box>
          </HStack>
        </>
      ) : (
        <>
          <Skeleton startColor="gray.300" endColor="gray.200" height="27px" w="full" />
          <HStack w="full" spacing={6}>
            <Skeleton startColor="gray.300" endColor="gray.200" rounded="lg" height="72px" w="full" />
            <Skeleton startColor="gray.300" endColor="gray.200" rounded="lg" height="72px" w="full" />
          </HStack>
          <HStack w="full" spacing={6} justifyContent="space-between">
            <Skeleton startColor="gray.300" endColor="gray.200" h={4} w="full" />
            <Skeleton startColor="gray.300" endColor="gray.200" h={4} w="full" />
          </HStack>
        </>
      )}
    </VStack>
  );
};

export default VehicleCard;
