import React from 'react';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import appLabels from 'utils/appLabels';
import { EmptyListContainer } from './styles';

type EmptyListProps = {
  shouldRender: boolean;
};

const EmptyList: React.FC<EmptyListProps> = ({ shouldRender }) => {
  if (!shouldRender) {
    return <></>;
  }
  return (
    <EmptyListContainer>
      <CommonText textType={COMMON_TEXT_TYPES.SUBTITLE}>
        {appLabels.homeScreen.labelEmptyList}
      </CommonText>
    </EmptyListContainer>
  );
};

export default EmptyList;
