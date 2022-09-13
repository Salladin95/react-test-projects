import React, { useRef } from 'react';
import { ModalProps } from '../contracts';
import Button from 'react-bootstrap/Button';
import useHookOutside from '../hooks/useHookOutside';

export default ({ showDetails, onClose, deleteProduct }: ModalProps) => {
  const show = showDetails ? 'show' : '';
  const classes = `modalW alert alert-warning ${show}`;

  const modal = useRef<HTMLDivElement>(null!);

  useHookOutside(modal, () => {
    if (showDetails) {
      onClose();
    }
  });

  const onOk = () => {
    deleteProduct();
    onClose();
  };

  return (
    <div className={classes} ref={modal} role="alert">
      <h4 className="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind
        content.
      </p>
      <hr />
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
      <Button variant="danger" onClick={onOk}>
        Ok
      </Button>
    </div>
  );
};
