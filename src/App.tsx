import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Router from 'router';
import GenericSafeAreaView from 'shared/components/GenericSafeAreaView';
import GenericStatusBar from 'shared/components/GenericStatusBar';
import { theme } from 'shared/theme';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GenericStatusBar />
        <GenericSafeAreaView>
          <Router />
        </GenericSafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
