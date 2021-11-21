import React from 'react';
import { IconButton, Tooltip } from '@chakra-ui/react';
import { connect } from 'react-redux';
import Icon from '../Icon';
import Modal from '../Modal';
import { setLocation, toggleModal } from 'store/actions/map';

const PositionButton = ({ setPosition, modal, toggleModal }) => {
  const getLocation = () => {
    if (!navigator.geolocation) {
      toggleModal(true, '您的瀏覽器不支援地理定位功能');
      return;
    }
    toggleModal(true, '定位中...');
    navigator.geolocation.getCurrentPosition(
      position => {
        toggleModal(false, null);
        setPosition([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        toggleModal(true, '無法檢索您的位置。');
      }
    );
  };

  return (
    <>
      <Tooltip label="點擊定位" hasArrow bg="accent.400" mt={1}>
        <IconButton
          arial-label="點擊定位"
          isRound
          size="lg"
          bg="primary.400"
          icon={<Icon name="crosshairs" size="6" color="white" />}
          _hover={{ bg: 'primary.500' }}
          _disabled={{ bg: 'gray.300' }}
          _active={{ bg: 'primary.400', borderColor: 'primary.500', borderWidth: '3px' }}
          _focus={{ bg: 'primary.400', borderColor: 'primary.500', borderWidth: '3px' }}
          boxShadow="base"
          onClick={getLocation}
        />
      </Tooltip>
      <Modal isOpen={modal.isOpen} content={modal.content} />
    </>
  );
};

const mapStateToProps = state => {
  const { map } = state;
  return {
    modal: map.modal,
  };
};

const mapDispatchToProps = dispatch => ({
  setPosition: position => dispatch(setLocation(position)),
  toggleModal: (isOpen, content) => dispatch(toggleModal({ isOpen, content })),
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionButton);
