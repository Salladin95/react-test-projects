import React, { useState } from 'react';
import GoodsList from 'components/list/';
import Result from 'components/result';
import Form from './components/form';
import productsStub from 'components/store';
import SettingsContext from './components/context/settings';
import CurrentLanguage from 'components/currentLanguage/currentLanguage';
import getEmptyUser from './components/form/getUser';
import { RouteFn, RouteOption, Settings, UpdateValueFn } from 'components/contracts';
import { FormValueOption, IForm } from 'components/form/contracts';

export default () => {
  const [settings, setSettings] = useState<Settings>({ lang: 'ru' });
  const [showDetails, setShopwDetails] = useState(false);
  const toggleShowDetails = () => {
    setShopwDetails(!showDetails);
  };
  const [goods, setProducts] = useState(productsStub());
  const [page, setPage] = useState<RouteOption>('/');

  const [orderForm, setUser] = useState<IForm>(getEmptyUser());

  const total = goods.reduce((acc, current) => acc + current.price * current.cnt, 0);
  const amountOfItems = goods.reduce((acc, current) => acc + current.cnt, 0);

  const updatePage = (newPage: RouteOption) => setPage(newPage);

  const updateUserData: UpdateValueFn = (name, value, valid) => {
    setUser(
      orderForm.map((orderForm) => {
        if (orderForm.name !== name) {
          return orderForm;
        }
        return { ...orderForm, value, valid };
      })
    );
  };

  const orderData: Record<FormValueOption, string> = {
    email: '',
    name: '',
    phone: '',
  };

  orderForm.forEach((field) => {
    orderData[field.name as FormValueOption] = field.value;
  });

  const router: Record<RouteOption, RouteFn> = {
    '/': () => (
      <GoodsList
        updatePage={updatePage}
        setProducts={setProducts}
        goods={goods}
        total={total}
        toggleShowDetails={toggleShowDetails}
        showDetails={showDetails}
      />
    ),
    form: () => (
      <Form
        updatePage={updatePage}
        orderForm={orderForm}
        updateUserData={updateUserData}
        showDetails={showDetails}
        toggleShowDetails={toggleShowDetails}
        orderData={orderData}
      />
    ),
    result: () => {
      return (
        <Result
          total={total}
          amountOfItems={amountOfItems}
          personalData={orderData}
          updatePage={updatePage}
        />
      );
    },
  };

  return (
    <>
      <SettingsContext.Provider value={settings}>
        {router[page]()}
        <CurrentLanguage updateCurrentLanguage={setSettings} />
      </SettingsContext.Provider>
    </>
  );
};
