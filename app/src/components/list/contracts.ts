import { RouteOption } from 'components/contracts';

export type GoodListProps = {
  showDetails: boolean;
  updatePage: (page: RouteOption) => void;
  toggleShowDetails: () => void;
};
