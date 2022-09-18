import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import SettingsContext from '../../components/context/settings';
import { ResultProps } from './contracts';

export default ({ personalData, amountOfItems, total, updatePage }: ResultProps) => {
  const settings = useContext(SettingsContext);
  const txtRu = 'Результат для: ';
  const txtEn = 'Result for: ';
  return (
    <div className="container">
      <h1>
        {settings.lang === 'ru' ? txtRu : txtEn} {personalData.name}
      </h1>
      <hr />
      <h3>Check your personal information</h3>
      <h4>Your phone is: {personalData.phone}</h4>
      <h4>Your email is: {personalData.email}</h4>
      <h3>There are {amountOfItems} items in cart</h3>
      <h3>total: ${total}</h3>
      <hr />
      <Button variant="primary" onClick={updatePage.bind(this, '/')}>
        Back to main page
      </Button>
    </div>
  );
};
