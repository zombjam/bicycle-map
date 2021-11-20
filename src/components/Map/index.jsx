import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';

import MarkerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import MarkerIcon from 'leaflet/dist/images/marker-icon.png';
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png';

import 'leaflet/dist/leaflet.css';

const Map = () => {
  useEffect(() => {
    const L = require('leaflet');

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: MarkerIcon2x,
      iconUrl: MarkerIcon,
      shadowUrl: MarkerShadow,
    });
  }, []);

  const position = [25.024, 121.55];

  return (
    <Box w="full" h="full">
      <MapContainer center={position} zoom={13} zoomControl={false} style={{ height: '100%' }}>
        <ZoomControl position="topright" />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
