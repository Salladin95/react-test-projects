import { IGood } from 'components/contracts';

export type FormDataField = 'fieldName' | 'fieldEmail' | 'fieldPhone';

export type StoreOption = 'cart' | 'formData' | 'products';

export type CartItem = { id: number; cnt: number };

export type IProductWithoutCnt = Pick<IGood, 'id' | 'price' | 'rest' | 'title'>;

export type CartItems = Pick<IGood, 'id' | 'cnt'>;
