import React, { useState } from 'react';
import {
  COMMON_TEXT_TYPES,
  Dash,
  ICommonText,
  StyledCommonText,
  CommonTextContainer,
} from './styles';

const CommonText: React.FC<ICommonText> = props => {
  const [dashWidth, setDashWidth] = useState(0);
  const [dashVerticalOffset, setDashVerticalOffset] = useState(0);
  const isDashedText = props.textType === COMMON_TEXT_TYPES.DASHED;
  return (
    <CommonTextContainer>
      <StyledCommonText
        {...props}
        onLayout={({ nativeEvent }) => {
          if (isDashedText) {
            setDashWidth(nativeEvent.layout.width);
            setDashVerticalOffset(
              (nativeEvent.layout.height && nativeEvent.layout.height / 2) || 0,
            );
          }
        }}
      />
      {isDashedText && (
        <Dash width={dashWidth} verticalOffset={dashVerticalOffset} />
      )}
    </CommonTextContainer>
  );
};

export default CommonText;
