import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_en from "./assets/translations/en/common.json";
import common_es from "./assets/translations/es/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
      en: {
          common: common_en
      },
      es: {
          common: common_es
      },
  },
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);