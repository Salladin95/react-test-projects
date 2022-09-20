import React, { useContext } from 'react';
import { IGood } from '../contracts';
import ListItem from './listItem';
import SettingsContext from '../contexts/settings';

type ListItemProps = {
  goods: IGood[];
  setCnt: (id: number, cnt: number) => void;
  onDelete: (product: IGood) => void;
};

export default ({ goods, setCnt, onDelete }: ListItemProps) => {
  const settings = useContext(SettingsContext);
  return (
    <>
      <h1>{settings.lang === 'ru' ? 'Корзина' : 'Cart'}</h1>
      <hr />
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
          <ListItem goods={goods} setCnt={setCnt} onDelete={onDelete} />
        </tbody>
      </table>
    </>
  );
};
