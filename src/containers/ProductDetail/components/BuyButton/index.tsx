import React, { memo } from 'react';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import appLabels from 'utils/appLabels';
import { BuyButtonContainer } from './styles';

type BuyButtonProps = {
  hasInventory: boolean;
};

const BuyButton: React.FC<BuyButtonProps> = ({ hasInventory }) => {
  return (
    <BuyButtonContainer>
      <CommonButton
        delayPressIn={50}
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
