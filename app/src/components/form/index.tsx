import { FormValueOption, MyFormProps } from 'components/contracts';
import React, { useContext } from 'react';
import MyForm from './form';
import { Button } from 'react-bootstrap';
import SettingsContext from '../../components/context/settings';

export default ({ updatePage, updateUserData, user }: MyFormProps) => {
  const keys = user ? Object.keys(user) : [];
  const isDisable =
    keys.length >= 3 ? !keys.every((key) => user[key as FormValueOption] !== '') : true;
  const settings = useContext(SettingsContext);

  return (
    <div className="container">
      <h1>{settings.lang === 'ru' ? 'Форма' : 'Form'}</h1>
      <hr />
      <MyForm formType="email" id="email" updateUserData={updateUserData} />
      <MyForm formType="text" id="name" updateUserData={updateUserData} />
      <MyForm formType="text" id="phone" updateUserData={updateUserData} />
      <div>
        <Button variant="secondary" onClick={updatePage.bind(this, '/')}>
          previous
        </Button>
        <Button variant="primary" disabled={isDisable} onClick={updatePage.bind(this, 'result')}>
          next
        </Button>
      </div>
    </div>
  );
};
