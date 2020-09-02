import React from 'react';

import colors from '../../constants/colors';

import {Box} from '../../atoms/Spaces';
import {TextTag} from '../../atoms/Titles';

function BoxTags({data}) {
  return (
    <Box
      mt={16}
      mb={16}
      flex={1}
      align={'flex-start'}
      fd={'row'}
      fw={'wrap'}
      bg="transparent">
      {data &&
        data.map((item, id) => {
          return (
            <TextTag
              key={id}
              color={colors.white}
              size={16}
              id={item.id}
              mr={20}
              mb={10}>
              {item.name}
            </TextTag>
          );
        })}
    </Box>
  );
}

export default BoxTags;
