import React, { useContext } from 'react';
import MyForm from './form';
import { Button } from 'react-bootstrap';
import SettingsContext from '../../contexts/settings';
import { MyFormProps } from './contracts';
import MyModal from '../modal';
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import FormData from 'store/form';
import { Link, useNavigate } from 'react-router-dom';
import Cart from 'store/cart';

export default observer(({ showDetails, toggleShowDetails }: MyFormProps) => {
  const getInputType = (value: string) => (value === 'email' ? 'email' : 'text');
  const navigate = useNavigate();
  const [formData, cart] = useStore('formData', 'cart');
  const { orderData, orderForm } = formData as FormData;

  const { clear } = cart as Cart;

  const isDisable = Object.values(orderForm).every((field) => field.valid);
  const settings = useContext(SettingsContext);

  const goToResult = () => {
    navigate('/result');
    clear();
  };

  const children = (
    <>
      <div>
        <p>
          Your name is <strong>{orderData.name}.</strong>
        </p>
        <hr />
        <p>
          Your email is <strong>{orderData.email}.</strong>
        </p>
        <hr />
        <p>
          Your phone is <strong>{orderData.phone}.</strong>
        </p>
        <hr />
        <p>
          If everything okay click <strong>Yes</strong> and we&apos;ll send you detailed
          information.
        </p>
      </div>
    </>
  );

  return (
    <div className="container">
      <h1>{settings.lang === 'ru' ? 'Форма' : 'Form'}</h1>
      <hr />
      {Object.values(orderForm).map((field) => (
        <MyForm formType={getInputType(field.name)} field={field} key={field.name} />
      ))}
      <div>
        <Link className="btn btn-secondary" to={'/'}>
          previous
        </Link>
        <Button variant="primary" disabled={!isDisable} onClick={toggleShowDetails}>
          next
        </Button>
      </div>
      <MyModal
        onClose={toggleShowDetails}
        onOkay={goToResult}
        isShow={showDetails}
        title="Check your data!"
      >
        {children}
      </MyModal>
    </div>
  );
});
