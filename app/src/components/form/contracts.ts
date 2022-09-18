import { RouteOption, UpdateValueFn } from 'components/contracts';

export type MyFormProps = {
  updatePage: (page: RouteOption) => void;
  updateUserData: UpdateValueFn;
  orderForm: IForm;
  showDetails: boolean;
  toggleShowDetails: () => void;
  orderData: Record<FormValueOption, string>;
};

export type IField = {
  name: string;
  value: string;
  label: string;
  valid: boolean;
  pattern: RegExp;
  errMsg: string;
};

export type IForm = IField[];

export type InputProps = {
  formType: string;
  updateUserData: UpdateValueFn;
  field: IField;
};

export type FormValueOption = 'name' | 'email' | 'phone';
