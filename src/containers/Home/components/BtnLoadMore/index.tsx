import React from 'react';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import appLabels from 'utils/appLabels';
import { BtnLoadMoreWrapper } from './styles';

type BtnLoadMoreProps = {
  onPress: () => void;
  isLoading?: boolean;
};

const BtnLoadMore: React.FC<BtnLoadMoreProps> = ({ onPress, isLoading }) => {
  return (
    <BtnLoadMoreWrapper>
      <CommonButton
        disabled={isLoading}
        text={appLabels.homeScreen.btnLoadMore}
        type={COMMON_BUTTON_TYPES.OUTLINE}
        onPress={onPress}
      />
    </BtnLoadMoreWrapper>
  );
};

export default BtnLoadMore;
