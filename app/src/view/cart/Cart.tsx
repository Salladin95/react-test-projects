import React, { useState } from 'react';
import TableBody from './tableBody';
import MyModal from '../../components/modal';
import { GoodListProps } from './contracts';
import { IGood } from 'components/contracts';
import { observer } from 'mobx-react-lite';
import useStore from '../../hooks/useStore';
import Cart from 'store/cart';
import { Link } from 'react-router-dom';

export default observer(({ toggleShowDetails, showDetails }: GoodListProps) => {
  const [product, setProduct] = useState<IGood>(null!);
  const [cart] = useStore('cart', 'products');
  const { goods, total, remove, change } = cart as Cart;

  const filtered = () => {
    remove(product.id);
  };

  const onDelete = (newProduct: IGood) => {
    if (!product) {
      setProduct(newProduct);
      toggleShowDetails();
    } else if (product.id !== newProduct.id) {
      if (!showDetails) {
        toggleShowDetails();
      }
      setProduct(newProduct);
    } else {
      toggleShowDetails();
    }
  };

  const modalTitle = `Are you sure?`;

  return (
    <div className="some">
      <TableBody goods={goods} setCnt={change} onDelete={onDelete} />
      <hr />
      <strong>total: $ {total}</strong>
      <hr />
      <Link to={'/order'} className="btn btn-success">
        Sumbit
      </Link>
      <hr />
      <MyModal
        onClose={toggleShowDetails}
        onOkay={filtered}
        isShow={showDetails}
        title={modalTitle}
      >
        <h3>
          Product <strong>{product?.title}</strong> will removed from cart.
        </h3>
      </MyModal>
    </div>
  );
});
