import _ from 'lodash';

export const getImageUriFromObject = (
  imageObjects = [],
  type = 'thumbnail'
) => {
  const image = _.find(imageObjects, { featured: true }) || {};
  return image[type];
};
