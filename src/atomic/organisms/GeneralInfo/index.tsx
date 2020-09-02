import React from 'react';

import colors from '../../constants/colors';

import {Box} from '../../atoms/Spaces';
import {TextRegular} from '../../atoms/Titles';

import Icons from '../../atoms/Icons';

function GeneralInfo({time, count, popularity, average}) {
  return (
    <Box bg={'transparent'} fd={'row'} pl={5} pt={5} pr={5} pb={5}>
      <Icons name="clock-o" size={14} color={colors.gold} />
      <TextRegular color={colors.white} ml={3} mr={20} size={11.5}>
        {time}min
      </TextRegular>

      <Icons name="heart" size={14} color={colors.carmen} />
      <TextRegular color={colors.white} ml={3} mr={20} size={11.5}>
        {count}
      </TextRegular>

      <Icons name="smile-o" size={14} color={colors.green} />
      <TextRegular color={colors.white} ml={3} mr={20} size={11.5}>
        {popularity}
      </TextRegular>

      <Icons name="star" size={14} color={colors.gold} />
      <TextRegular color={colors.white} ml={3} mr={20} size={11.5}>
        {average} / 10
      </TextRegular>
    </Box>
  );
}

export default GeneralInfo;
