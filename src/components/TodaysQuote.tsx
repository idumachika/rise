import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {useGetQuote} from '../api/universal/useGetQuote';
import ShareIcon from '../assets/icons/ShareIcon';
import {colors, fonts} from '../theme/theme';

const TodaysQuote = () => {
  const {data} = useGetQuote();

  return (
    <View style={styles.quoteBanner}>
      <Text style={styles.quoteHeading}>Today's Quote</Text>
      <View style={styles.quoteLine} />

      <Text style={styles.quote}>{data?.quote}</Text>

      <View style={styles.quoteFooter}>
        <Text style={styles.quoteAuthor}>{data?.author}</Text>

        <Pressable style={styles.quoteShareBtn}>
          <ShareIcon />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteBanner: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: colors.primary,
    borderWidth: 2,
    borderColor: '#41BCC4',
    marginTop: 34,
    marginHorizontal: 20,
  },
  quoteHeading: {
    textTransform: 'uppercase',
    fontFamily: fonts.dmsans_bold,
    fontSize: 14,
    lineHeight: 18,
    color: colors.white,
  },
  quoteLine: {
    width: 28,
    height: 3,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  quote: {
    paddingTop: 20,
    fontSize: 15,
    lineHeight: 22,
    color: colors.white,
  },
  quoteFooter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  quoteAuthor: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fonts.dmsans_bold,
    color: colors.white,
  },
  quoteShareBtn: {
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodaysQuote;
