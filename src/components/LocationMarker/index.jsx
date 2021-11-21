import React from 'react';
import { Marker, Popup } from 'react-leaflet';

const LocationMarker = ({ position, icon, isPop, ...props }) => {
  return (
    <Marker position={position} icon={icon} {...props}>
      {isPop && <Popup></Popup>}
    </Marker>
    //
  );
};

export default LocationMarker;
