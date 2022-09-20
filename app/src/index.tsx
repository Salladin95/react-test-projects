import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StoreContext from './components/contexts/store';
import { RootStore } from 'components/store/rootStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = new RootStore();

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
