import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {InputIcon} from './InputIcon';

interface CustomTextInputPropsI {
  value: string;
  handleValue: (value: string) => void;
  iconType: string;
}
export function CustomTextInput({
  iconType,
  handleValue,
  value,
}: CustomTextInputPropsI) {
  return (
    <View style={styles.wrapper}>
      <InputIcon type={iconType} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e6e8',
  },
  wrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
});
