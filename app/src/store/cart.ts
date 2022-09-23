import { IGood } from 'components/contracts';
import { makeAutoObservable } from 'mobx';
import { CartItem, IProductWithoutCnt } from './contracts';
import { RootStore } from './rootStore';

export default class Cart {
  rootStore: RootStore;

  items: CartItem[] = [];

  itemsDetailed: IGood[] = [];

  get goods() {
    return this.items.map((cartItem) => {
      const product = this.rootStore.products.getById(cartItem.id) as IProductWithoutCnt;
      return { ...product, cnt: cartItem.cnt } as IGood;
    });
  }

  get total() {
    return this.goods.reduce((sum, pr) => {
      return sum + pr.price * pr.cnt;
    }, 0);
  }

  get inCart() {
    return (id: number) => this.items.some((item) => item.id === id);
  }

  add = (id: number) => {
    if (!this.inCart(id)) {
      this.items.push({ id, cnt: 1 });
    }
  };

  remove = (id: number) => (this.items = this.items.filter((item) => item.id !== id));

  change = (id: number, cnt: number) => {
    const cartProduct = this.items.find((pr) => pr.id === id);
    const product = this.rootStore.products.getById(id) as IProductWithoutCnt;
    if (product !== undefined) {
      (cartProduct as CartItem).cnt = Math.max(1, Math.min(product.rest, cnt));
    }
  };

  clear = () => {
    this.items = [];
  };

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }
}
