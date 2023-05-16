/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import BackIcon from '../assets/icons/BackIcon';
import {colors, fonts} from '../theme/theme';

type AuthHeaderProps = {
  heading: string;
  subheading: string;
  hasBackBtn?: boolean;
};

const AuthHeader = ({heading, subheading, hasBackBtn}: AuthHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {hasBackBtn ? (
        <Pressable onPress={() => navigation.goBack()}>
          <BackIcon />
        </Pressable>
      ) : null}
      <View style={{marginTop: hasBackBtn ? 30 : 50}}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.subheading}>{subheading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  heading: {
    color: '#222222',
    fontSize: 20,
    fontFamily: fonts.grotesk_medium,
    lineHeight: 26,
  },
  subheading: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: fonts.dmsans_regular,
    color: colors.soft_neutral,
    paddingTop: 11,
  },
});

export default AuthHeader;
