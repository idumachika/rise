import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../theme/theme';

type HeadingProps = {
  heading: string;
  subheading?: string;
  icon: React.ReactNode;
};

const Heading = ({heading, subheading, icon}: HeadingProps) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>{icon}</Pressable>
        <Text style={styles.planHeading}>{heading}</Text>
      </View>
      {subheading ? (
        <Text style={styles.planSubheading}>{subheading}</Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 55,
    paddingTop: 34,
  },
  planHeading: {
    fontFamily: fonts.grotesk_bold,
    fontSize: 24,
    lineHeight: 26,
    textAlign: 'center',
    color: colors.black,
    width: '80%',
  },
  planSubheading: {
    textAlign: 'center',
    paddingTop: 30,
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.soft_neutral,
  },
});

export default Heading;
