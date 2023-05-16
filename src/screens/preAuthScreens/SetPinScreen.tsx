/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AuthHeader from '../../components/AuthHeader';
import {colors, fonts} from '../../theme/theme';

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'B'];

const SetPinScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

      <AuthHeader
        heading="Create a 6-digit PIN"
        subheading="You’ll use this PIN to sign in and confirm transactions"
        hasBackBtn
      />

      <View style={styles.otpInputs}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <View style={styles.otpInput} key={index}>
            <Text style={styles.otpInputText}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.keys}>
        {keys.map(item => (
          <Pressable key={item} style={styles.key}>
            <Text style={styles.keyText}>{item}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  otpInputs: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 317,
  },
  otpInput: {
    width: 42,
    height: 42,
    borderWidth: 1,
    borderColor: 'rgba(113, 135, 156, 0.2)',
    borderRadius: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInputText: {
    fontFamily: fonts.grotesk_bold,
    color: '#222222',
    fontSize: 15,
    lineHeight: 20,
  },
  keys: {
    marginTop: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 286,
    alignSelf: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  key: {
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyText: {
    fontFamily: fonts.dmsans_bold,
    color: colors.primary,
    textAlign: 'center',
    fontSize: 30,
  },
});
export default SetPinScreen;
