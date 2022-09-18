import { RouteOption } from 'components/contracts';
import { FormValueOption } from 'components/form/contracts';

export type ResultProps = {
  total: number;
  amountOfItems: number;
  personalData: Record<FormValueOption, string>;
  updatePage: (value: RouteOption) => void;
};
