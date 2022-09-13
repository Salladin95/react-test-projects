import React from 'react';
import { MinMax } from '../minMax';
import { Button } from 'react-bootstrap';
import { IGood } from '../contracts';

type ListItemProps = {
  goods: IGood[];
  setCnt: (id: number, cnt: number) => void;
  onDelete: (id: number) => void;
  total: number;
};

export default ({ goods, setCnt, onDelete, total }: ListItemProps) => {
  return (
    <>
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
                <Button
                  variant="danger"
                  className="btn-delete"
                  onClick={onDelete.bind(this, pr.id)}
                >
                  delete
                </Button>
                <Button variant="primary" onClick={() => setCnt(pr.id, pr.rest)}>
                  add all
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <strong>total: $ {total}</strong>
    </>
  );
};
