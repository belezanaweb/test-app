import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import theme from 'shared/styles/theme';
import { LoadingContainer } from './styles';

const AnimatedLoadingContainer = Animated.createAnimatedComponent(
  LoadingContainer,
);

type FullScreenLoadingProps = {
  active: boolean;
};

const FullScreenLoading: React.FC<FullScreenLoadingProps> = ({ active }) => {
  const [isLoadingDisabled, setIsLoadingDisabled] = useState(false);
  const animatedValue = useRef(new Animated.Value(1));

  const fadeOut = useMemo(
    () =>
      Animated.timing(animatedValue.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.ease,
      }),
    [],
  );

  useEffect(() => {
    !active && fadeOut.start(() => setIsLoadingDisabled(true));
  }, [active, fadeOut]);

  const animatedStyle = {
    opacity: animatedValue.current,
  };

  return (
    <AnimatedLoadingContainer style={animatedStyle} pointerEvents={'none'}>
      {!isLoadingDisabled && (
        <ActivityIndicator size="large" color={theme.palette.primary} />
      )}
    </AnimatedLoadingContainer>
  );
};

export default memo(FullScreenLoading);
