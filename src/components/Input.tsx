/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Control, Controller, FieldValues, Path} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {
  FloatingLabelInput,
  FloatingLabelProps,
} from 'react-native-floating-label-input';
import {fonts} from '../theme/theme';

interface InputProps<T extends FieldValues> extends FloatingLabelProps {
  label: string;
  control: Control<T>;
  name: Path<T>;
}

const Input = <T extends FieldValues>({
  label,
  control,
  name,
  ...otherProps
}: InputProps<T>) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}, fieldState: {error}}) => (
        <View>
          <FloatingLabelInput
            label={label}
            value={value}
            isFocused={isFocused}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            containerStyles={{
              borderWidth: isFocused || error ? 2 : 1,
              paddingRight: 10,
              backgroundColor: '#fff',
              borderColor: isFocused ? '#0898A0' : error ? 'red' : '#E1E8ED',
              borderRadius: 8,
            }}
            customLabelStyles={{
              colorFocused: error ? 'red' : '#0898A0',
              fontSizeFocused: 11,
              topFocused: -30,
              leftFocused: 10,
            }}
            labelStyles={{
              backgroundColor: '#fff',
              paddingHorizontal: 10,
              color: '#292F33',
              fontSize: 15,
              lineHeight: 20,
              fontFamily: fonts.dmsans_bold,
            }}
            inputStyles={{
              color: '#292F33',
              padding: 15,
              fontSize: 15,
              lineHeight: 20,
              fontFamily: fonts.dmsans_bold,
              position: 'relative',
            }}
            onChangeText={onChange}
            {...otherProps}
          />
          {error ? <Text style={styles.error}>{error?.message}</Text> : null}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  error: {
    fontFamily: fonts.dmsans_regular,
    paddingTop: 3,
    fontSize: 12,
    lineHeight: 16,
    color: 'red',
    paddingHorizontal: 10,
  },
});
export default Input;
