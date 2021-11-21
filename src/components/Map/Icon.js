import L from 'leaflet';

import UserPositionImg from '../../assets/icons/user-position.svg';
import DefaultImg from '../../assets/icons/State-Default.svg';
import LimitedImg from '../../assets/icons/State-Limited.svg';
import DisabledImg from '../../assets/icons/State-Disabled.svg';

L.DefaultIcon = L.Icon.extend(iconExtends(DefaultImg, 'default'));

L.LimitedIcon = L.Icon.extend(iconExtends(LimitedImg, 'limited'));

const GPS_ICON = new L.icon({
  iconUrl: UserPositionImg,
  iconAnchor: null,
  iconSize: [75, 75],
});

const DefaultIcon = number => new L.DefaultIcon({ number });
const LimitedIcon = number => new L.LimitedIcon({ number });
const DisabledIcon = new L.icon({
  iconUrl: DisabledImg,
});

export { GPS_ICON, DefaultIcon, LimitedIcon, DisabledIcon };

function iconExtends(url, status) {
  return {
    options: {
      iconUrl: url,
    },
    createIcon: function () {
      const div = document.createElement('div');
      const img = createImg(this.options['iconUrl']);
      const numDiv = createNumberDiv(this.options['number'] || '');
      div.appendChild(img);
      div.appendChild(numDiv);
      setIconStyles(div, 'icon', status);
      return div;
    },
  };
}

function createImg(src) {
  const img = document.createElement('img');
  img.setAttribute('src', src);
  return img;
}

function createNumberDiv(number) {
  const numDiv = document.createElement('div');
  numDiv.setAttribute('class', 'number');
  numDiv.innerHTML = number || '';
  return numDiv;
}

function setIconStyles(div, className, status) {
  div.setAttribute('class', className);
  div.style.position = 'relative';
  const numDiv = div.querySelector('.number');
  numDiv.style.position = 'absolute';
  numDiv.style.top = '12px';
  numDiv.style.left = '50%';
  numDiv.style.transform = 'translateX(-50%)';

  if (!status) {
    return;
  }
  numDiv.style.fontSize = '22px';
  numDiv.style.fontWeight = '500';
  numDiv.style.fontFamily = 'var(--chakra-fonts-body)';

  const fontColor = {
    default: 'var(--chakra-colors-primary-400)',
    limited: 'var(--chakra-colors-warn-400)',
  };
  numDiv.style.color = fontColor[status];
}
