import { Settings } from 'components/contracts';
import { createContext } from 'react';

export default createContext<Settings>({ lang: 'ru' });
