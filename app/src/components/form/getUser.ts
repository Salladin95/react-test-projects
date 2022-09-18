import { IForm } from './contracts';

const getOrederForm = (
  name: string,
  label: string,
  value: string,
  valid: boolean,
  pattern: RegExp,
  errMsg: string
) => {
  return { name, label, value, valid, pattern, errMsg };
};

export default (): IForm => {
  return [
    getOrederForm(
      'name',
      'Name',
      '',
      false,
      /^[A-Z]{3,20}$/i,
      'Name must contain more than two characters'
    ),
    getOrederForm(
      'email',
      'Email',
      '',
      false,
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Email must be like some95@mail.ru'
    ),
    getOrederForm('phone', 'Phone', '', false, /^[0-9]{11}$/, 'Phone must be 79201234567'),
  ];
};
