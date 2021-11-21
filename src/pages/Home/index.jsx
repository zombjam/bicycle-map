import React from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { PositionButton, PinButtons, Map, SearchVehicles, LocationMarker } from 'components';
import { Popup } from 'react-leaflet';

const Home = ({ station }) => {
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
      <Map>
        {station.map(item => (
          <LocationMarker
            key={item.StationUID}
            position={[item.StationPosition.PositionLat, item.StationPosition.PositionLon]}
            count={item.AvailableRentBikes}
          >
            <Popup closeButton={false}>{item.StationName}</Popup>
          </LocationMarker>
        ))}
      </Map>
    </>
  );
};

const mapStateToProps = state => {
  const { station } = state;
  return {
    station: station.station,
  };
};

export default connect(mapStateToProps)(Home);
