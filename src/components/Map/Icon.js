import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

import MarkerIcon from '../MarkerIcon';
import UserPositionImg from '../../assets/icons/user-position.svg';

const GPS_ICON = new L.icon({
  iconUrl: UserPositionImg,
  iconAnchor: null,
  iconSize: [75, 75],
});

const generateMarkerIcon = quantity =>
  L.divIcon({
    iconSize: [58, 73],
    iconAnchor: [22.5, 30],
    popupAnchor: [5, -30],
    className: 'custom-icon',
    html: ReactDOMServer.renderToString(<MarkerIcon quantity={quantity} />),
  });

export { GPS_ICON, generateMarkerIcon };
