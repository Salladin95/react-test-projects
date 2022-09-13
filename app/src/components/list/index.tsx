import React, { useState } from 'react';
import productsStub from '../store';
import Modal from '../modal';
import TableBody from './tableBody';
import { IGood } from '../contracts';

export default () => {
  const [goods, setProducts] = useState(productsStub());
  const [showDetails, setShopwDetails] = useState(false);
  const [product, setProduct] = useState<null | IGood>(null);

  const total = goods.reduce((acc, current) => acc + current.price * current.cnt, 0);

  const filtered = () => {
    setProducts(goods.filter((good) => good.id !== product?.id));
  };

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
      <TableBody goods={goods} setCnt={setCnt} onDelete={onDelete} total={total} />
      <Modal
        title={product?.title as string}
        showDetails={showDetails}
        deleteProduct={filtered}
        onClose={toggleShowDetails.bind(this, false)}
      />
    </div>
  );
};
