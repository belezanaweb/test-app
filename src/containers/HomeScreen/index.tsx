import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import {
  CommonButton,
  COMMON_BUTTON_TYPES,
} from 'shared/components/CommonButton';
import appLabels from 'utils/appLabels';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Text>Primeiro commit!</Text>
      <CommonButton
        text={appLabels.homeScreen.btnLoadMore}
        type={COMMON_BUTTON_TYPES.NORMAL}
        onPress={() => {
          navigation.navigate('ProductDetail');
        }}
      />
    </View>
  );
};

export default HomeScreen;
