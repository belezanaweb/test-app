import React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from 'shared/styles/theme';

const Close: React.FC = () => {
  return (
    <Svg
      width="12"
      height="12"
      fill={theme.palette.common.black}
      stroke={theme.palette.common.black}
      viewBox="0 0 22 22">
      <Path d="M12.832 11l7.788-7.788a1.293 1.293 0 000-1.832 1.293 1.293 0 00-1.832 0L11 9.168 3.212 1.38a1.293 1.293 0 00-1.832 0 1.293 1.293 0 000 1.832L9.168 11 1.38 18.788a1.293 1.293 0 00.916 2.211c.332 0 .664-.127.916-.379L11 12.832l7.788 7.788a1.292 1.292 0 001.832 0 1.293 1.293 0 000-1.832zm0 0" />
    </Svg>
  );
};

export default React.memo(Close);
