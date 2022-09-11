import React, { useState } from 'react';
import { MinMax } from './minMax';
import productsStub from './store/getGoods';
import Button from 'react-bootstrap/Button';

export default () => {
  const [goods, setProducts] = useState(productsStub());

  const total = goods.reduce((acc, current) => acc + current.price * current.cnt, 0);

  const filtered = (id: number) => {
    setProducts(goods.filter((good) => good.id !== id));
  };

  const setCnt = (id: number, cnt: number) => {
    setProducts(goods.map((pr) => (pr.id != id ? pr : { ...pr, cnt })));
  };

  return (
    <div className="some">
      <h1>goods list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Cnt</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
          {goods.map((pr, i) => (
            <tr key={pr.id}>
              <td>{i + 1}</td>
              <td>{pr.title}</td>
              <td>{pr.price}</td>
              <td>
                <MinMax max={pr.rest} current={pr.cnt} updateCnt={(cnt) => setCnt(pr.id, cnt)} />
              </td>
              <td>{pr.price * pr.cnt}</td>
              <td>
                <Button variant="danger" onClick={() => filtered(pr.id)}>
                  delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <strong>total: $ {total}</strong>
    </div>
  );
};
