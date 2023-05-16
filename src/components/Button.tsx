/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../theme/theme';

type ButtonProps = {
  text: React.ReactNode;
  onPress: () => void;
  variant: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button = ({onPress, text, disabled, variant}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.btn,
        {
          backgroundColor:
            variant === 'primary' ? colors.primary : 'rgba(113, 135, 156, 0.1)',
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.btnText,
          {
            color: variant === 'primary' ? colors.white : colors.primary,
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 18,
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: fonts.dmsans_bold,
    fontSize: 15,
    lineHeight: 20,
  },
});

export default Button;
