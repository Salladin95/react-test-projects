import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { CurrentLanguageProps } from './contracts';

export default ({ updateCurrentLanguage }: CurrentLanguageProps) => {
  const togglleLanguage = (lang: 'ru' | 'en') => updateCurrentLanguage({ lang });
  return (
    <div>
      <span>ru | </span>
      <Button variant="secondary" onClick={togglleLanguage.bind(this, 'ru')}>
        ru
      </Button>
      <Button variant="dark" onClick={togglleLanguage.bind(this, 'en')}>
        en
      </Button>
    </div>
  );
};
