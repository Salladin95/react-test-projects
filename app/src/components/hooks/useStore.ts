import { StoreOption } from 'components/store/contracts';
import { useContext } from 'react';
import StoreContext from '../contexts/store';

export default function (...list: StoreOption[]) {
  const stores = useContext(StoreContext);
  return list.map((name) => stores[name as StoreOption]);
}
