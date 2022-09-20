import { IGood } from 'components/contracts';
import { makeAutoObservable } from 'mobx';
import { RootStore } from './rootStore';

export class Cart {
  rootStore: RootStore;

  products = productsStub();

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  get total() {
    return this.products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
  }

  get amountOfItems() {
    return this.products.reduce((acc, curr) => acc + curr.cnt, 0);
  }

  change = (id: number, cnt: number) => {
    const product = this.products.find((pr) => pr.id === id);

    if (product !== undefined) {
      product.cnt = Math.max(1, Math.min(product.rest, cnt));
    }
  };

  remove = (id: number) => {
    this.products = this.products.filter((pr) => pr.id !== id);
  };
}

function productsStub(): IGood[] {
  return [
    {
      id: 100,
      title: 'Ipnone 200',
      price: 12000,
      rest: 10,
      cnt: 1,
    },
    {
      id: 101,
      title: 'Samsung AAZ8',
      price: 22000,
      rest: 5,
      cnt: 1,
    },
    {
      id: 103,
      title: 'Nokia 3310',
      price: 5000,
      rest: 2,
      cnt: 1,
    },
    {
      id: 105,
      title: 'Huawei ZZ',
      price: 15000,
      rest: 8,
      cnt: 1,
    },
  ];
}
