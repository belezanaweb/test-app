import React, { memo } from 'react';
import CommonButton from 'shared/components/CommonButton';
import { COMMON_BUTTON_TYPES } from 'shared/components/CommonButton/styles';
import appLabels from 'utils/appLabels';
import { ButtonLoadMoreWrapper } from './styles';

type ButtonLoadMoreProps = {
  onPress: () => void;
  isLoading?: boolean;
};

const ButtonLoadMore: React.FC<ButtonLoadMoreProps> = ({
  onPress,
  isLoading,
}) => {
  return (
    <ButtonLoadMoreWrapper>
      <CommonButton
        disabled={isLoading}
        text={appLabels.homeScreen.btnLoadMore}
        type={COMMON_BUTTON_TYPES.OUTLINE}
        onPress={onPress}
      />
    </ButtonLoadMoreWrapper>
  );
};

export default memo(ButtonLoadMore);
