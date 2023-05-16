/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../theme/theme';

const details = [
  {
    id: 1,
    name: 'Total earnings',
    amount: '$12,000.09',
  },
  {
    id: 2,
    name: 'Total earnings',
    amount: '$12,000.09',
  },
  {
    id: 3,
    name: 'Total earnings',
    amount: '$12,000.09',
  },
  {
    id: 4,
    name: 'Total earnings',
    amount: '$12,000.09',
  },
  {
    id: 5,
    name: 'Total earnings',
    amount: '$12,000.09',
  },
];

const PlanDetailsLists = () => {
  return (
    <View style={styles.details}>
      {details.map(detail => (
        <View
          style={[
            styles.detail,
            {
              borderBottomWidth:
                details[details.length - 1].id === detail.id ? 0 : 1,
              borderBottomColor: 'rgba(113, 135, 156, 0.1)',
            },
          ]}
          key={detail.id}>
          <Text style={styles.detailText}>Total earnings</Text>
          <Text style={styles.amount}>$12,000.09</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    gap: 10,
    paddingTop: 25,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  detailText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.soft_neutral,
  },
  amount: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 15,
    lineHeight: 20,
    color: '#222222',
  },
});

export default PlanDetailsLists;
