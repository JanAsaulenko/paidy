import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../shared/styles';

export const InputIcon = ({type}: {type: string}) => {
  return (
    <Icon
      name={type}
      size={15}
      color={colors.iconColor}
      style={{
        position: 'absolute',
      }}
    />
  );
};
