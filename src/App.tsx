import React, { Fragment } from 'react';
import Router from 'router';
import CommonSafeAreaView from 'shared/components/CommonSafeAreaView';
import CommonStatusBar from 'shared/components/CommonStatusBar';
import theme from 'shared/styles/theme';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CommonStatusBar />
        <CommonSafeAreaView>
          <Router />
        </CommonSafeAreaView>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
