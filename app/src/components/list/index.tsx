import React, { useState } from 'react';
import productsStub from '../store';
import Modal from '../modal';
import TableBody from './tableBody';
import '../modal/style.css';

export default () => {
  const [goods, setProducts] = useState(productsStub());
  const [showDetails, setShopwDetails] = useState(false);
  const [productId, setProductId] = useState<null | number>(null);

  const total = goods.reduce((acc, current) => acc + current.price * current.cnt, 0);

  const filtered = () => {
    setProducts(goods.filter((good) => good.id !== productId));
  };

  const toggleShowDetails = (isShow: boolean) => {
    setShopwDetails(isShow);
  };

  const onDelete = (id: number) => {
    toggleShowDetails(!showDetails);
    setProductId(id);
  };

  const setCnt = (id: number, cnt: number) => {
    setProducts(goods.map((pr) => (pr.id != id ? pr : { ...pr, cnt })));
  };

  return (
    <div className="some">
      <TableBody goods={goods} setCnt={setCnt} onDelete={onDelete} total={total} />
      <Modal
        showDetails={showDetails}
        deleteProduct={filtered}
        onClose={toggleShowDetails.bind(this, false)}
      />
    </div>
  );
};
