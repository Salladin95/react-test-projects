import React from 'react';
import useStore from 'hooks/useStore';
import { Button } from 'react-bootstrap';
import Cart from 'store/cart';
import { observer } from 'mobx-react-lite';

export default observer(({ id }: { id: number }) => {
  const [cart] = useStore('cart');
  const { add: addToCart, remove: removeFromCart, inCart } = cart as Cart;

  const isInCart = inCart(id);

  const btnVariant = !isInCart ? 'success' : 'danger';
  const btnInnerText = !isInCart ? 'add' : 'remove';

  const onClick = () => {
    if (!isInCart) {
      addToCart(id);
    } else {
      removeFromCart(id);
    }
  };

  return (
    <Button variant={btnVariant} onClick={onClick}>
      {btnInnerText}
    </Button>
  );
});
