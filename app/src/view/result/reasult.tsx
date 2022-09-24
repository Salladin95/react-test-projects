import React, { useContext } from 'react';
import SettingsContext from '../../contexts/settings';
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import Cart from 'store/cart';
import FormData from 'store/form';
import { Link } from 'react-router-dom';

export default observer(() => {
  const [cart, formData] = useStore('cart', 'formData');
  const { orderData } = formData as FormData;
  const { total, goods } = cart as Cart;

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
      <h3>There are {goods.reduce((acc, pr) => acc + pr.cnt, 0)} items in cart</h3>
      <h3>total: ${total}</h3>
      <hr />
      <Link className="btn btn-primary" to={'/'}>
        Back to main page
      </Link>
    </div>
  );
});
