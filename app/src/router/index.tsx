import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GoodsList from '../view/cart/';
import Result from '../view/result';
import Form from '../components/form';
import E404 from 'view/404/E404';
import Home from 'view/home';
import Product from 'view/product';

export default () => {
  const [showDetails, setShopwDetails] = useState(false);

  const toggleShowDetails = () => {
    setShopwDetails(!showDetails);
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={<GoodsList showDetails={showDetails} toggleShowDetails={toggleShowDetails} />}
      />
      <Route path="/product/:id" element={<Product />} />
      <Route
        path="/order"
        element={<Form showDetails={showDetails} toggleShowDetails={toggleShowDetails} />}
      />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<E404 />} />
    </Routes>
  );
};

/* export default function(){
	return useRoutes([
		{ path: "/", element: <Home /> },
		{ path: "/product/:id", element: <Product /> }
	]);
} */
