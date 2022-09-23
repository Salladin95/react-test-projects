import { useContext } from 'react';
import StoreContext from '../contexts/store';
import { StoreOption } from 'store/contracts';

export default function (...list: StoreOption[]) {
  const stores = useContext(StoreContext);
  return list.map((name) => stores[name as StoreOption]);
}
