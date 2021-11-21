import React, { useMemo } from 'react';
import { Marker } from 'react-leaflet';
import { generateMarkerIcon } from '../Map/Icon';

const LocationMarker = ({ position, count, children, ...props }) => {
  const displayIcon = generateMarkerIcon(count);

  return (
    <Marker position={position} icon={displayIcon} {...props}>
      {children}
    </Marker>
    //
  );
};

export default LocationMarker;
