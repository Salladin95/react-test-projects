export type MyFormProps = {
  showDetails: boolean;
  toggleShowDetails: () => void;
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
  field: IField;
};

export type FormValueOption = 'name' | 'email' | 'phone';
