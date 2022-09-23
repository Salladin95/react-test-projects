import React from 'react';
import { IGood } from 'components/contracts';
import { MinMax } from 'components/minMax';
import { Button } from 'react-bootstrap';

export default ({
  goods,
  setCnt,
  onDelete,
}: {
  goods: IGood[];
  setCnt: (id: number, cnt: number) => void;
  onDelete: (good: IGood) => void;
}) => {
  return (
    <>
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
            <Button variant="danger" className="btn-delete" onClick={onDelete.bind(this, pr)}>
              delete
            </Button>
            <Button variant="primary" onClick={() => setCnt(pr.id, pr.rest)}>
              add all
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
};
