import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import SettingsContext from '../contexts/settings';
import { ResultProps } from './contracts';
import { observer } from 'mobx-react-lite';
import useStore from 'components/hooks/useStore';
import { Cart } from 'components/store';
import { FormData } from 'components/store/form';
import { StoreOption } from 'components/store/contracts';

export default observer(({ updatePage }: ResultProps) => {
  const [cart, formData] = useStore('cart', 'formData');

  const { orderData } = formData as FormData;
  const { amountOfItems, total } = cart as Cart;

  const settings = useContext(SettingsContext);
  const txtRu = 'Результат для: ';
  const txtEn = 'Result for: ';

  return (
    <div className="container">
      <h1>
        {settings.lang === 'ru' ? txtRu : txtEn} {orderData.name}
      </h1>
      <hr />
      <h3>Check your personal information</h3>
      <h4>Your phone is: {orderData.phone}</h4>
      <h4>Your email is: {orderData.email}</h4>
      <h3>There are {amountOfItems} items in cart</h3>
      <h3>total: ${total}</h3>
      <hr />
      <Button variant="primary" onClick={updatePage.bind(this, '/')}>
        Back to main page
      </Button>
    </div>
  );
});
