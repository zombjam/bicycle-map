import React, { useEffect, useCallback, useRef } from 'react';
import { Flex, AspectRatio, VStack } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { loadBikeStation } from 'api';
import { getStations } from 'store/actions/station';
import { getDistance } from 'geolib';

import SearchBar from '../SearchBar';
import VehicleCard from './VehicleCard';

const SearchVehicles = ({ position, station, getStations }) => {
  const listRef = useRef(null);

  const fetchStations = useCallback(() => {
    if (!position.length) return;
    const [lat, lng] = position;
    const params = {
      $spatialFilter: `nearby(${lat}, ${lng}, 1000)`,
    };
    loadBikeStation(params).then(res => {
      listRef.current.scrollTo(0, 0);
      const data = res.map(item => ({
        ...item,
        distance: getDistance(
          { latitude: lat, longitude: lng },
          { latitude: item.StationPosition.PositionLat, longitude: item.StationPosition.PositionLon }
        ),
      }));
      getStations(data);
    });
  }, [position, getStations]);

  useEffect(() => {
    fetchStations();
  }, [fetchStations]);

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
          ref={listRef}
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
          {!station.length && [0, 1, 2, 3].map(i => <VehicleCard key={i} />)}
          {station.map(item => (
            <VehicleCard key={item.StationUID} vehicle={item} />
          ))}
        </VStack>
      </Flex>
    </AspectRatio>
  );
};

const mapStateToProps = state => {
  const { map, station } = state;
  return {
    position: map.position,
    station: station.station,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStations: data => dispatch(getStations(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchVehicles);
