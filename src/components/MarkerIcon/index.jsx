import React, { useMemo } from 'react';
import { Box, Tag, Img } from '@chakra-ui/react';
import Icon from '../Icon';

import DefaultImg from '../../assets/icons/State-Default.svg';
import LimitedImg from '../../assets/icons/State-Limited.svg';
import DisabledImg from '../../assets/icons/State-Disabled.svg';

const fontColor = {
  default: 'var(--chakra-colors-primary-400)',
  limited: 'var(--chakra-colors-warn-400)',
};

const MarkerIcon = ({ quantity }) => {
  const statusIcon = useMemo(() => {
    if (quantity > 5) {
      return DefaultImg;
    } else if (quantity > 0) {
      return LimitedImg;
    } else {
      return DisabledImg;
    }
  }, [quantity]);

  const statusColor = useMemo(() => {
    if (quantity > 5) {
      return fontColor.default;
    } else if (quantity > 0) {
      return fontColor.limited;
    } else {
      return '';
    }
  }, [quantity]);

  if (quantity === undefined || quantity === null) {
    return <Icon name="map" color="var(--chakra-colors-warn-500)" w="58px" h="72px" />;
  }

  return (
    <Box position="relative" border="0">
      {quantity > 0 && (
        <Tag
          position="absolute"
          color={statusColor}
          fontSize="22px"
          fontWeight="500"
          top={8}
          left="50%"
          transform="translateX(-50%)"
          fontFamily="var(--chakra-fonts-body)"
        >
          {quantity}
        </Tag>
      )}
      <Img w="58px" h="72px" src={statusIcon} />
    </Box>
  );
};

export default MarkerIcon;
