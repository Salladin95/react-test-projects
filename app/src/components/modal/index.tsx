import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { ModalProps } from './contracts';

const modalBody = (el: React.ReactNode | null) => {
  if (!el) {
    return;
  }
  return el;
};

export default ({ isShow, onClose, title, onOkay, children = null }: ModalProps) => {
  const [confirmed, setConfirmed] = useState(false);

  const closeWithAnimation = () => {
    setConfirmed(true);
    onClose();
  };

  const onExited = () => {
    if (!confirmed) {
      return;
    }
    onOkay();
  };

  return (
    <Modal show={isShow} onHide={onClose} onExited={onExited}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalBody(children)}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="warning" onClick={closeWithAnimation}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
