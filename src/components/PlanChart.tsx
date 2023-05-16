import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../theme/theme';

const tags = [
  {
    id: 1,
    name: 'Investments • $50,400',
    color: colors.white,
  },
  {
    id: 2,
    name: 'Returns • $20,803',
    color: '#41BCC4',
  },
];

const PlanChart = () => {
  return (
    <View style={styles.planChartcontainer}>
      <View style={styles.planChartHeader}>
        <Text style={styles.planChartHeaderText}>Performance</Text>
        <Text style={styles.planChartAmount}>$208.39</Text>
        <Text style={styles.planChartDate}>July 26th, 2021</Text>
      </View>

      <View style={styles.reviewTags}>
        {tags.map(tag => (
          <View style={styles.reviewTag} key={tag.id}>
            <View
              style={[styles.reviewTagIcon, {backgroundColor: tag.color}]}
            />
            <Text style={styles.reviewTagText}>{tag.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  planChartcontainer: {
    marginTop: 25,
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 27,
  },
  planChartHeader: {
    alignItems: 'center',
  },
  planChartHeaderText: {
    color: colors.white,
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  planChartAmount: {
    color: colors.white,
    fontFamily: fonts.grotesk_bold,
    fontSize: 24,
    lineHeight: 26,
    textAlign: 'center',
    paddingTop: 3,
  },
  planChartDate: {
    color: colors.white,
    fontFamily: fonts.dmsans_regular,
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    paddingTop: 3,
  },
  reviewTags: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  reviewTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  reviewTagIcon: {
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
    backgroundColor: '#94A1AD',
  },
  reviewTagText: {
    color: colors.white,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.dmsans_regular,
  },
});
export default PlanChart;
