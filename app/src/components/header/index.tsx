import React from 'react';
import useStore from '../../hooks/useStore';
import Cart from 'store/cart';
import { observer } from 'mobx-react-lite';

export default observer(() => {
  const [cart] = useStore('cart');
  const { items } = cart as Cart;
  return (
    <header>
      <div className="container mt-1">
        <div className="row justify-content-between">
          <div className="col">Logo</div>
          <div className="col">In cart: {items.length}</div>
        </div>
        <hr />
      </div>
    </header>
  );
});
