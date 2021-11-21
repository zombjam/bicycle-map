import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react';

const Model = ({ isOpen, content }) => {
  return (
    <>
      <Modal isOpen={isOpen} size="sm" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody fontSize="2xl" textAlign="center" color="primary.500">
            {content}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

const mapStateToProps = state => {
  const { map } = state;
  return {
    isOpen: map.modal.isOpen,
    content: map.modal.content,
  };
};

export default connect(mapStateToProps)(Model);
