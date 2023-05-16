import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import CircleQuestionIcon from '../assets/icons/CircleQuestionIcon';
import {colors, fonts} from '../theme/theme';

const ContactBanner = () => {
  return (
    <Shadow
      startColor="rgba(53, 71, 89, 0.05)"
      distance={10}
      containerStyle={styles.contactContainer}
      style={styles.contactBannerContainer}>
      <View style={styles.questionContainer}>
        <CircleQuestionIcon />
        <Text style={styles.questionText}>Need help? </Text>
      </View>

      <Pressable style={styles.contactBtn}>
        <Text style={styles.contactBtnText}>Contact us</Text>
      </Pressable>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  contactContainer: {marginHorizontal: 20, marginTop: 32},
  contactBannerContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12,
  },
  questionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  questionText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: '#171C22',
  },
  contactBtn: {
    paddingVertical: 10,
    paddingHorizontal: 23,
    backgroundColor: colors.primary,
    borderRadius: 6,
  },
  contactBtnText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#fff',
    fontFamily: fonts.dmsans_regular,
  },
});
export default ContactBanner;
