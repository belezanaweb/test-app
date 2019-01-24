import React from "react";
import { View, Image } from "react-native";

const getSource = (imageObjects, size) => {
  let images = imageObjects.filter(imgs => {
    if (imgs.featured) return imgs;
  })[0];

  if (!images) return "";

  let uri = images[size];

  if (uri) return uri;

  if (images["extraLarge"]) return images["extraLarge"];

  if (images["large"]) return images["large"];

  if (images["medium"]) return images["medium"];

  if (images["small"]) return images["small"];

  if (images["thumbnail"]) return images["thumbnail"];
};

export default ({ imageObjects, size, width = 150 }) => {
  const style = getStyle(width);

  return (
    <Image
      source={{ uri: getSource(imageObjects, size) }}
      style={style.image}
    />
  );
};

const getStyle = width => ({
  image: {
    flex: 1,
    width
  }
});
