import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native';
export const Label = ({value}: {value: string}) => {
  return <Text style={styles.text}>{value}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#9c9b98',
    fontFamily: 'Gill Sans',
  },
});
