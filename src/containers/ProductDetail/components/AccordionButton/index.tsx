import Arrow from 'assets/svg/Arrow';
import React, { memo, useMemo, useRef } from 'react';
import { useWindowDimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, { Easing } from 'react-native-reanimated';
import { moderateScale } from 'react-native-size-matters';
import CommonText from 'shared/components/CommonText';
import { COMMON_TEXT_TYPES } from 'shared/components/CommonText/styles';
import theme from 'shared/styles/theme';
import appLabels from 'utils/appLabels';
import { AccordionWrapper, LinearGradientWrapper } from './styles';

const AnimatedLinearGradientWrapper = Animated.createAnimatedComponent(
  LinearGradientWrapper,
);

type AccordionButtonProps = {
  onOpenAccordion: () => void;
  isAccordionOpen: boolean;
};

const AccordionButton: React.FC<AccordionButtonProps> = ({
  onOpenAccordion,
  isAccordionOpen,
}) => {
  const animatedValue = useRef(new Animated.Value(0));
  const { width } = useWindowDimensions();
  const gradienteDimensions = useMemo(() => {
    return {
      height: moderateScale(theme.dimensions.gradient.height),
      width: width,
    };
  }, [width]);

  const fadeIn = Animated.timing(animatedValue.current, {
    toValue: 1,
    duration: 150,
    easing: Easing.ease,
  });

  const fadeOut = Animated.timing(animatedValue.current, {
    toValue: 0,
    duration: 150,
    easing: Easing.ease,
  });

  React.useEffect(() => {
    if (isAccordionOpen) {
      fadeIn.start();
    } else {
      fadeOut.start();
    }
  }, [fadeIn, fadeOut, isAccordionOpen]);

  const animatedRotateStyle = {
    transform: [
      {
        rotate: animatedValue.current.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        }),
      },
    ],
  };

  const animatedOpacityStyle = {
    opacity: animatedValue.current.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
  };

  /**
   * This image is not totally correct, seems that the end with more opacity
   * does not become totally transparent, so seems that it is cutting the component.
   * It's a little detail. Just remake the asset and would be imperceptible.
   */
  return (
    <AccordionWrapper
      delayPressIn={50}
      activeOpacity={1}
      onPress={onOpenAccordion}>
      <CommonText textType={COMMON_TEXT_TYPES.ACCORDION}>
        {isAccordionOpen
          ? appLabels.productDetail.btnReadMoreOpen
          : appLabels.productDetail.btnReadMoreClosed}
      </CommonText>
      <Animated.View style={animatedRotateStyle}>
        <Arrow />
      </Animated.View>
      <AnimatedLinearGradientWrapper
        pointerEvents="none"
        style={animatedOpacityStyle}>
        <FastImage
          style={gradienteDimensions}
          source={require('assets/images/linearGradient.png')}
        />
      </AnimatedLinearGradientWrapper>
    </AccordionWrapper>
  );
};

export default memo(AccordionButton);
