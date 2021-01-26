import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { theme } from 'shared/theme';
import { LoadingContainer } from './styles';

const AnimatedLoadingContainer = Animated.createAnimatedComponent(
  LoadingContainer,
);

type FullScreenLoadingProps = {
  active: boolean;
};

const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({ active }) => {
  const [rideLoading, setrideLoading] = useState(false);
  const animatedValue = useRef(new Animated.Value(1));

  const fadeOut = Animated.timing(animatedValue.current, {
    toValue: 0,
    duration: 500,
    easing: Easing.ease,
  });

  const toggleLoadingVisibility = useCallback(() => {
    fadeOut.start(() => setrideLoading(true));
  }, [fadeOut]);

  useEffect(() => {
    !active && toggleLoadingVisibility();
  }, [active, toggleLoadingVisibility]);

  const animatedStyle = {
    opacity: animatedValue.current,
  };

  return (
    <AnimatedLoadingContainer style={animatedStyle} pointerEvents={'none'}>
      {!rideLoading && (
        <ActivityIndicator size="large" color={theme.palette.primary} />
      )}
    </AnimatedLoadingContainer>
  );
};

export default memo(FullScreenLoading);
