import React, { PureComponent } from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';

export default class ContainerBox extends PureComponent {
  render() {
    const { children, scrollEnabled } = this.props;
    if (scrollEnabled)
      return (
        <ScrollView
          ref="scrollBox"
          showsVerticalScrollIndicator={false}
          onContentSizeChange={(w, h) => this.refs.scrollBox.scrollToEnd()}
        >
          <View style={styles.container}>{children}</View>
        </ScrollView>
      );
    return <View style={styles.container}>{children}</View>;
  }
}
