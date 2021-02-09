import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback } from 'react';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import { ProductDetailNavigationProp } from 'utils/types/Router';
import appLabels from 'utils/appLabels';
import { BuyButtonContainer } from './styles';

type BuyButtonProps = {
  hasInventory: boolean;
};

const BuyButton: React.FC<BuyButtonProps> = ({ hasInventory }) => {
  const navigation = useNavigation<ProductDetailNavigationProp>();

  const handlePress = useCallback(() => {
    navigation.navigate('GlobalModal', { hasInventory: hasInventory });
  }, [hasInventory, navigation]);

  return (
    <BuyButtonContainer>
      <CommonButton
        delayPressIn={50}
        onPress={handlePress}
        type={
          hasInventory
            ? COMMON_BUTTON_TYPES.NORMAL
            : COMMON_BUTTON_TYPES.OUTLINE
        }
        text={
          hasInventory
            ? appLabels.productDetail.btnBuy
            : appLabels.productDetail.btnNotify
        }
      />
    </BuyButtonContainer>
  );
};

export default memo(BuyButton);
