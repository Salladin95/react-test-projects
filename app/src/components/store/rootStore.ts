import { Cart } from '.';
import { FormData } from './form';

export class RootStore {
  cart: Cart;

  formData: FormData;

  constructor() {
    this.cart = new Cart(this);
    this.formData = new FormData(this);
  }
}
