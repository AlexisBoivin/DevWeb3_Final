import React from 'react';
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App.tsx'

import { IntlProvider } from 'react-intl';
import Francais from './lang/fr.json';
import Anglais from './lang/en.json';

const locale = 'fr';
const messages = Francais;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
)
