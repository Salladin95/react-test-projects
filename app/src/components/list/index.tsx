import React, { useState } from 'react';
import TableBody from './tableBody';
import { GoodListProps, IGood } from '../contracts';
import { Button } from 'react-bootstrap';

export default ({ updatePage, goods, total, setProducts }: GoodListProps) => {
  const [showDetails, setShopwDetails] = useState(false);
  const [product, setProduct] = useState<null | IGood>(null);

  /* const filtered = () => {
    setProducts(goods.filter((good) => good.id !== product?.id));
  }; */

  const toggleShowDetails = (isShow: boolean) => {
    setShopwDetails(isShow);
  };

  const onDelete = (newProduct: IGood) => {
    if (!product) {
      setProduct(newProduct);
      toggleShowDetails(!showDetails);
    } else if (product.id !== newProduct.id) {
      if (!showDetails) {
        toggleShowDetails(!showDetails);
      }
      setProduct(newProduct);
    } else {
      toggleShowDetails(!showDetails);
    }
  };

  const setCnt = (id: number, cnt: number) => {
    setProducts(goods.map((pr) => (pr.id != id ? pr : { ...pr, cnt })));
  };

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
    </div>
  );
};
