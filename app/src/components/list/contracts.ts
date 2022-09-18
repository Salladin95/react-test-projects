import { IGood, RouteOption } from 'components/contracts';

export type GoodListProps = {
  goods: IGood[];
  total: number;
  showDetails: boolean;
  updatePage: (page: RouteOption) => void;
  setProducts: (goods: IGood[]) => void;
  toggleShowDetails: () => void;
};
