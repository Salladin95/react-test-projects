import { IUser } from 'components/contracts';

export default (): IUser => {
  return {
    name: null,
    email: null,
    phone: null,
  };
};
