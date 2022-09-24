import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useParams } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import Products from 'store/products';
import { IProductWithoutCnt } from 'store/contracts';
import E404 from 'view/404/E404';
import BtnControl from '../../components/productControl';

export default observer(Product);

function Product() {
  const { id } = useParams();
  const [products] = useStore('products', 'cart');
  const { getById } = products as Products;
  const product = getById(+(id as string)) as IProductWithoutCnt;

  if (!/^[1-9]+\d*/.test(id as string) || !product) {
    return <E404 />;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <hr />
      <h1>Price: {product.price}</h1>
      <hr />
      <h1>Rest: {product.rest}</h1>
      <BtnControl id={product.id} />
      <Link to="/" className="btn btn-secondary">
        back home
      </Link>
    </div>
  );
}
