import Cart from './cart';
import FormData from './form';
import Products from './products';
export class RootStore {
  cart: Cart;

  formData: FormData;

  products: Products;

  constructor() {
    this.cart = new Cart(this);
    this.formData = new FormData(this);
    this.products = new Products(this);
  }
}
