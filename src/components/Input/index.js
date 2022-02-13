import {View, TextInput, Text} from 'react-native';
import React from 'react';

import styles from './styles';

const Input = ({onChangeText, value, style, label, icon, iconPosition}) => {
  const getDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      }
      return 'row-reverse';
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper, {flexDirection: getDirection()}]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={value}
          // placeholder="useless placeholder"
          // keyboardType="numeric"
        />
      </View>
    </View>
  );
};

export default Input;
