import React, { useRef } from 'react';
import { ModalProps } from '../contracts';
import Button from 'react-bootstrap/Button';
import useHookOutside from '../hooks/useHookOutside';

export default ({ showDetails, onClose, deleteProduct, title }: ModalProps) => {
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
      <h4 className="alert-heading">Hold on a second!</h4>
      <p>Are you sure that you want to remove {title} from cart?</p>
      <hr />
      <Button variant="danger" onClick={onOk}>
        Ok
      </Button>
    </div>
  );
};
