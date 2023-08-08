import { ReportHandler } from 'web-vitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy';
import { RecoilRoot } from 'recoil';
import { i18nInit } from './config/localization/i18next.config';
import App from './App';
import { globalTheme } from './theme/theme';
// ... rest of the code ...

i18nInit();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={globalTheme}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({
      getCLS, getFID, getFCP, getLCP, getTTFB,
    }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

reportWebVitals();
