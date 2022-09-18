import React, { useState } from 'react';
import TableBody from './tableBody';
import { Button } from 'react-bootstrap';
import MyModal from '../modal';
import { GoodListProps } from './contracts';
import { IGood } from 'components/contracts';

export default ({
  updatePage,
  goods,
  total,
  setProducts,
  toggleShowDetails,
  showDetails,
}: GoodListProps) => {
  const [product, setProduct] = useState<null | IGood>(null);

  const filtered = () => {
    setProducts(goods.filter((good) => good.id !== product?.id));
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

  const setCnt = (id: number, cnt: number) => {
    setProducts(goods.map((pr) => (pr.id != id ? pr : { ...pr, cnt })));
  };

  const modalTitle = `Are you sure?`;

  return (
    <div className="some">
      <TableBody goods={goods} setCnt={setCnt} onDelete={onDelete} />
      <hr />
      <strong>total: $ {total}</strong>
      <hr />
      <Button variant="success" onClick={updatePage.bind(this, 'form')}>
        Sumbit
      </Button>
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
};
