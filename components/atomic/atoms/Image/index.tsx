import React from 'react';
import { Image as Img } from 'react-native';

type props = {
  uri: string;
  type?: 'big' | 'medium';
};

const mode = ['contain', 'contain'] as const;
const Image: React.FC<props> = ({ uri, type = 'big' }): JSX.Element => {
  const sizeBtyType = {
    big: {
      style: { width: '100%', height: '100%' },
      resizeMode: mode[0],
    },
    medium: {
      style: { width: '100%', height: '80%' },
      resizeMode: mode[1],
    },
  };

  return (
    <Img
      source={{ uri: uri }}
      resizeMode={sizeBtyType[type].resizeMode}
      style={sizeBtyType[type].style}
    />
  );
};

export default Image;
