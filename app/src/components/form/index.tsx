import React, { useContext } from 'react';
import MyForm from './form';
import { Button } from 'react-bootstrap';
import SettingsContext from '../../components/context/settings';
import { MyFormProps } from './contracts';
import MyModal from '../modal';

export default ({
  updatePage,
  updateUserData,
  orderForm,
  showDetails,
  toggleShowDetails,
  orderData,
}: MyFormProps) => {
  const getInputType = (value: string) => (value === 'email' ? 'email' : 'text');

  const isDisable = orderForm.every((field) => field.valid);
  const settings = useContext(SettingsContext);

  const goToResult = () => {
    updatePage('result');
  };

  const children = (
    <>
      <p>
        Your name is <strong>{orderData.name}.</strong>
        <hr />
        Your email is <strong>{orderData.email}.</strong>
        <hr />
        Your phone is <strong>{orderData.phone}.</strong>
        <hr />
        If everything okay click <strong>Yes</strong> and we&apos;ll send you detailed information.
      </p>
    </>
  );

  return (
    <div className="container">
      <h1>{settings.lang === 'ru' ? 'Форма' : 'Form'}</h1>
      <hr />
      {orderForm.map((field) => (
        <MyForm
          formType={getInputType(field.name)}
          field={field}
          key={field.name}
          updateUserData={updateUserData}
        />
      ))}
      <div>
        <Button variant="secondary" onClick={updatePage.bind(this, '/')}>
          previous
        </Button>
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
};
