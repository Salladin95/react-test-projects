import React, { useState } from 'react';
import GoodsList from 'components/list/';
import Result from 'components/result';
import Form from './components/form';
import SettingsContext from './components/contexts/settings';
import CurrentLanguage from 'components/currentLanguage/currentLanguage';
import { RouteFn, RouteOption, Settings } from 'components/contracts';

export default () => {
  const [settings, setSettings] = useState<Settings>({ lang: 'ru' });
  const [showDetails, setShopwDetails] = useState(false);

  const toggleShowDetails = () => {
    setShopwDetails(!showDetails);
  };

  const [page, setPage] = useState<RouteOption>('/');

  const updatePage = (newPage: RouteOption) => setPage(newPage);

  const router: Record<RouteOption, RouteFn> = {
    '/': () => (
      <GoodsList
        updatePage={updatePage}
        toggleShowDetails={toggleShowDetails}
        showDetails={showDetails}
      />
    ),
    form: () => (
      <Form
        updatePage={updatePage}
        showDetails={showDetails}
        toggleShowDetails={toggleShowDetails}
      />
    ),
    result: () => {
      return <Result updatePage={updatePage} />;
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
