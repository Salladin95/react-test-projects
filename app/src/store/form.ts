import { FormValueOption, IField } from 'components/form/contracts';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';

export default class FormData {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get orderForm() {
    return this._orderForm;
  }

  get orderData() {
    const orderObj: Record<string, string> = {};
    Object.keys(this._orderForm).forEach(
      (field) => (orderObj[field] = this._orderForm[field as FormValueOption].value)
    );
    return orderObj;
  }

  updateField = (fieldName: FormValueOption, value: string): void => {
    const targetField = this.orderForm[fieldName];
    if (targetField.pattern.test(value)) {
      targetField.value = value;
      targetField.valid = true;
    } else {
      targetField.value = '';
      targetField.valid = false;
    }
  };

  private _orderForm: Record<FormValueOption, IField> = {
    name: this.getOrederForm(
      'name',
      'Name',
      '',
      false,
      /^[A-Z]{3,20}$/i,
      'Name must contain more than two characters'
    ),
    email: this.getOrederForm(
      'email',
      'Email',
      '',
      false,
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Email must be like some95@mail.ru'
    ),
    phone: this.getOrederForm(
      'phone',
      'Phone',
      '',
      false,
      /^[0-9]{11}$/,
      'Phone must be 79201234567'
    ),
  };

  private getOrederForm(
    name: string,
    label: string,
    value: string,
    valid: boolean,
    pattern: RegExp,
    errMsg: string
  ): IField {
    return { name, label, value, valid, pattern, errMsg };
  }
}
