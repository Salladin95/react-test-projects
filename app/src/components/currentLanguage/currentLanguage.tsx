import React, { useContext } from 'react';
import Button from 'react-bootstrap/esm/Button';
import { CurrentLanguageProps } from '../contracts';
import SettingsContext from '../context/settings';

export default ({ updateCurrentLanguage }: CurrentLanguageProps) => {
  const settings = useContext(SettingsContext);

  const togglleLanguage = (lang: 'ru' | 'en') => {
    if (settings.lang === lang) {
      return;
    }
    updateCurrentLanguage({ lang });
  };

  return (
    <div>
      <span>{settings.lang} | </span>
      <Button variant="secondary" onClick={togglleLanguage.bind(this, 'ru')}>
        ru
      </Button>
      <Button variant="dark" onClick={togglleLanguage.bind(this, 'en')}>
        en
      </Button>
    </div>
  );
};
