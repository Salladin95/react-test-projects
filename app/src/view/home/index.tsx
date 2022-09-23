import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import useStore from '../../hooks/useStore';
import Products from 'store/products';
import BtnControl from '../../components/productControl';

export default observer(Home);

function Home() {
  const [productsStore] = useStore('products', 'cart');
  const { products } = productsStore as Products;

  return (
    <div>
      <h1>Catalog</h1>
      <hr />
      <div className="row">
        {products.map((pr) => (
          <div className="col col-4 mb-3 mt-3" key={pr.id}>
            <div className="cuard">
              <div className="card-body">
                <h3>{pr.title}</h3>
                <div>{pr.price}</div>
                <div>
                  <Link to={`/product/${pr.id}`}>Read more</Link>
                </div>
                <BtnControl id={pr.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
