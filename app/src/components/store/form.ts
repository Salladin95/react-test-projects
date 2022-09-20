import { FormValueOption } from 'components/form/contracts';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';

export class FormData {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  get orderForm() {
    return this._orderForm;
  }

  get orderData() {
    const orderObj: Record<FormValueOption, string> = { name: '', email: '', phone: '' };
    this._orderForm.forEach((field) => {
      orderObj[field.name as FormValueOption] = field.value;
    });
    return orderObj;
  }

  updateField = (name: FormValueOption, value: string): void => {
    this._orderForm = this._orderForm.map((field) => {
      if (field.name !== name) {
        return field;
      }
      if (field.pattern.test(value)) {
        return { ...field, valid: true, value };
      }
      return { ...field, valid: false, value: '' };
    });
  };

  private _orderForm = [
    this.getOrederForm(
      'name',
      'Name',
      '',
      false,
      /^[A-Z]{3,20}$/i,
      'Name must contain more than two characters'
    ),
    this.getOrederForm(
      'email',
      'Email',
      '',
      false,
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Email must be like some95@mail.ru'
    ),
    this.getOrederForm('phone', 'Phone', '', false, /^[0-9]{11}$/, 'Phone must be 79201234567'),
  ];

  private getOrederForm(
    name: string,
    label: string,
    value: string,
    valid: boolean,
    pattern: RegExp,
    errMsg: string
  ) {
    return { name, label, value, valid, pattern, errMsg };
  }
}
