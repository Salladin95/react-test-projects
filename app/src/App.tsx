import React, { useState } from 'react';
import GoodsList from 'components/list/';
import Result from 'components/result';
import Form from './components/form';
import { IUser, RouteFn, RouteOption, Settings, UpdateValueByOption } from 'components/contracts';
import productsStub from 'components/store';
import SettingsContext from './components/context/settings';
import CurrentLanguage from 'components/currentLanguage';

export default () => {
  const [settings, setSettings] = useState<Settings>({ lang: 'ru' });

  const [goods, setProducts] = useState(productsStub());
  const [page, setPage] = useState<RouteOption>('/');

  const [user, setUser] = useState<IUser>(null!);

  const total = goods.reduce((acc, current) => acc + current.price * current.cnt, 0);
  const amountOfItems = goods.reduce((acc, current) => acc + current.cnt, 0);

  const updatePage = (newPage: RouteOption) => setPage(newPage);

  const updateUserData: UpdateValueByOption = {
    name: (name) => setUser({ ...user, name }),
    email: (email) => setUser({ ...user, email }),
    phone: (phone) => setUser({ ...user, phone }),
  };

  const router: Record<RouteOption, RouteFn> = {
    '/': () => (
      <GoodsList updatePage={updatePage} setProducts={setProducts} goods={goods} total={total} />
    ),
    form: () => <Form updatePage={updatePage} user={user} updateUserData={updateUserData} />,
    result: () => {
      return <Result total={total} amountOfItems={amountOfItems} personalData={user} />;
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
