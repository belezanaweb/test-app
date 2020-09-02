import React, {useState} from 'react';
import {Text, View} from 'react-native';

import colors from '../../constants/colors';

import {TextRegular} from '../../atoms/Titles';

function Pagination({current, total}) {
  const [page, setPage] = useState(current);
  const [items, setItems] = useState([]);

  const renderPages = () => {
    let components = [];

    for (let i = 1; i <= total; i++) {
      components.push(<TextRegular>{i}</TextRegular>);
    }

    setItems(components);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      {
      items.map((item, id) => {
        return item;
      })
      }
    </View>
  );
}

export default Pagination;
