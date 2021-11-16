import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    100: '#DFE4CE',
    200: '#CBD3B0',
    300: '#A4B375',
    400: '#738047',
    500: '#474F2C',
    600: '#292E19',
  },
  accent: {
    100: '#FAF0E5',
    200: '#F5DFC6',
    300: '#EABD8A',
    400: '#DE994A',
    500: '#C67A24',
    600: '#A3651E',
  },
  warn: {
    100: '#F7D4DD',
    200: '#F1B2C1',
    300: '#F27594',
    400: '#E75578',
    500: '#BC3253',
    600: '#8C3046',
  },
  gray: {
    100: '#FFFFFF',
    200: '#EEEEEE',
    300: '#C5C5C5',
    400: '#9A9A9A',
    500: '#767676',
    600: '#464646',
  },
};
const theme = extendTheme({ colors });

export default theme;
