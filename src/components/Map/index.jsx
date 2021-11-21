import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import LocationMarker from '../LocationMarker';
import { GPS_ICON } from './Icon';

import 'leaflet/dist/leaflet.css';
import { setLocation, setMap } from 'store/actions';

const Map = ({ position, map, setMap }) => {
  useEffect(() => {
    if (map) {
      map.flyTo(position);
    }
  }, [map, position]);

  return (
    <Box w="full" h="full">
      <MapContainer center={position} zoom={16} zoomControl={false} style={{ height: '100%' }} whenCreated={setMap}>
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        />
        <LocationMarker position={position} icon={GPS_ICON} title="目前的位置" alt="目前的位置"></LocationMarker>
      </MapContainer>
    </Box>
  );
};

const mapStateToProps = state => {
  const { map } = state;
  return { position: map.position, map: map.map };
};

const mapDispatchToProps = dispatch => {
  return {
    setPosition: position => {
      dispatch(setLocation(position));
    },
    setMap: map => {
      dispatch(setMap(map));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
