import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/portfolio.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import common_pt from './translations/pt/common.json';
import common_en from './translations/en/common.json';
import { ThemeProvider } from 'styled-components';
import { theme } from './css/theme';
import GlobalCSS from './css/global.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pt',
  resources: {
      pt: {
          common: common_pt
      },
      en: {
          common: common_en
      },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={ i18next }>
    <ThemeProvider theme={ theme }>
        <GlobalCSS />
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
