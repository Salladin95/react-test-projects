import React, { useState } from 'react';
import SettingsContext from './contexts/settings';
import CurrentLanguage from 'components/currentLanguage/currentLanguage';
import { Settings } from 'components/contracts';
import Header from './components/header';
import Aside from './components/aside';
import RouterView from './router';

export default () => {
  const [settings, setSettings] = useState<Settings>({ lang: 'ru' });

  return (
    <>
      <SettingsContext.Provider value={settings}>
        <div className="container">
          <div className="row">
            <Aside />
            <main className="col col-9">
              <Header />
              <RouterView />
            </main>
          </div>
        </div>
        <CurrentLanguage updateCurrentLanguage={setSettings} />
      </SettingsContext.Provider>
    </>
  );
};
