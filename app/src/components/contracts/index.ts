export type RouteOption = '/' | 'form' | 'result';
export type RouteFn = () => JSX.Element;

export type MinMaxProps = {
  min?: number;
  max: number;
  current: number;
  updateCnt: (number: number) => void;
};

export type ButtonProps = {
  innerButton: string;
  className: string;
  onClick: () => void;
};

export interface IGood {
  id: number;
  title: string;
  price: number;
  rest: number;
  cnt: number;
}

export type ModalProps = {
  showDetails: boolean;
  onClose: () => void;
  deleteProduct: () => void;
  title: string;
};

export type InputProps = {
  formType: string;
  id: string;
  updateUserData: UpdateValueByOption;
};

export type GoodListProps = {
  updatePage: (page: RouteOption) => void;
  goods: IGood[];
  total: number;
  setProducts: (goods: IGood[]) => void;
};

export type MyFormProps = {
  updatePage: (page: RouteOption) => void;
  updateUserData: UpdateValueByOption;
  user: IUser;
};

export type ResultProps = {
  total: number;
  amountOfItems: number;
  personalData: IUser;
};

export type IUser = {
  name: string | null;
  email: string | null;
  phone: string | null;
};

export type FormValueOption = 'name' | 'email' | 'phone';

export type UpdateValueByOption = {
  name: (value: string) => void;
  email: (value: string) => void;
  phone: (value: string) => void;
};

export type Settings = { lang: 'ru' | 'en' };

export type CurrentLanguageProps = {
  updateCurrentLanguage: (settings: Settings) => void;
};
