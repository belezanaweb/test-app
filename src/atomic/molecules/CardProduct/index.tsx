import React from 'react';
import {Image, Dimensions, View} from 'react-native';

import colors from '../../constants/colors';

import {BoxTouchable} from '../../atoms/Spaces';
import {TextRegular} from '../../atoms/Titles';

import Icons from '../../atoms/Icons';

function CardProduct({
  title,
  image,
  id,
  navigation,
  date,
  vote_average,
  vote_count,
}) {
  const margin = 16;

  const cat = {
    uri: `https://image.tmdb.org/t/p/w500/${image}`,
    width: (Dimensions.get('window').width - margin * 2) / 2,
    height: 285,
  };

  return (
    <BoxTouchable
      onPress={() => {
        navigation.navigate('Product', {id: id, title: title, image: image});
      }}
      ml={5}
      mb={margin}
      bg={colors.black}
      border={10}
      position={'relative'}>
      <Image source={cat} />

      <View style={{position: 'absolute', top: 0, right: 0}}>
        <View style={{position: 'relative'}}>
          <Icons name={'star'} size={55} color={colors.gold} />
          <TextRegular
            size={15}
            top={19}
            color={colors.graffit}
            position={'absolute'}>
            {vote_average}
          </TextRegular>
        </View>
      </View>

      <View style={{position: 'absolute', top: 245, right: 0}}>
        <View style={{position: 'relative'}}>
          <Icons name={'heart'} size={35} color={colors.carmen} />
          <TextRegular
            size={12}
            top={8}
            color={colors.graffit}
            position={'absolute'}>
            {vote_count}
          </TextRegular>
        </View>
      </View>

      <TextRegular
        size={16}
        ml={margin}
        mt={margin}
        mb={5}
        align={'flex-start'}
        color={colors.gold}>
        {title}
      </TextRegular>

      <TextRegular
        size={11}
        ml={margin}
        mb={margin}
        align={'flex-start'}
        color={'red'}>
        {date}
      </TextRegular>
    </BoxTouchable>
  );
}

export default CardProduct;
