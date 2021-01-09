import React from 'react';
import { Image as Img } from 'react-native';

type props = {
  uri: string;
  type?: 'big' | 'medium';
};

const Image: React.FC<props> = ({ uri, type = 'big' }): JSX.Element => {
  const sizeBtyType = {
    big: { width: '40%', height: '50%' },
    medium: { width: '100%', height: '80%' },
  };
  return (
    <Img source={{ uri: uri }} resizeMode="cover" style={sizeBtyType[type]} />
  );
};

export default Image;
