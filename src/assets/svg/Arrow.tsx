import React from 'react';
import Svg, { Path } from 'react-native-svg';
import theme from 'shared/styles/theme';

function Arrow() {
  return (
    <Svg width="13" height="9" fill="none" viewBox="0 0 13 9">
      <Path
        fill={theme.palette.common.royalHeath}
        d="M7.183 8.211l5.615-6.06A.77.77 0 0013 1.626a.77.77 0 00-.202-.527l-.413-.446a.656.656 0 00-.976 0L6.693 5.74 1.973.646A.661.661 0 001.483.43a.662.662 0 00-.488.217l-.414.446a.77.77 0 00-.201.527c0 .2.071.387.201.527L6.203 8.21a.662.662 0 00.98 0z"
      />
    </Svg>
  );
}

export default React.memo(Arrow);
