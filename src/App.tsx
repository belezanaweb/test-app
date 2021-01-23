import React, { Fragment } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

const App: React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>Primeiro commit!</Text>
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
