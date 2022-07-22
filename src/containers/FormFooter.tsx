import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const FormFooter = () => {
  return (
    <View style={styles.formFooterWrapper}>
      <View style={styles.row}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 15, height: 15}}
        />
        <Text style={styles.text}>Paidy</Text>
      </View>
      <Text style={[styles.text, {color: '#2e68cf'}]}>eng</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formFooterWrapper: {
    backgroundColor: '#f5f8fa',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
  },
  text: {
    fontFamily: 'Gill Sans',
    fontSize: 12,
    color: '#9c9b98',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
