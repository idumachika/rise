/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import GainIcon from '../assets/icons/GainIcon';
import LossIcon from '../assets/icons/LossIcon';
import RightChevronIcon from '../assets/icons/RightChevronIcon';
import {colors, fonts} from '../theme/theme';

const transactions = [
  {
    id: 1,
    desc: 'Received from Bank Account (BOSUN TONY ADEMOSU)',
    amount: '+$320.90',
    date: 'Jul 6, 2021',
    type: 'credit',
  },
  {
    id: 2,
    desc: 'Sent to Service (PAYSTACK 001WA00948 - AMARDA VENTURES LIMITED)',
    amount: '-$320.90',
    date: 'Jul 6, 2021',
    type: 'debit',
  },
];

const RecentTransactions = () => {
  return (
    <View style={styles.transationContainer}>
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionHeaderText}>Recent transactions</Text>
        <Pressable style={styles.transactionBtn}>
          <Text style={styles.transactionBtnText}>View all</Text>
          <RightChevronIcon />
        </Pressable>
      </View>

      <View style={styles.transactions}>
        {transactions.map(transaction => (
          <View style={styles.transaction} key={transaction.id}>
            <View style={styles.transactionLeft}>
              <View
                style={[
                  styles.transactionIcon,
                  {
                    backgroundColor:
                      transaction.type === 'credit'
                        ? 'rgba(76, 217, 100, 0.15)'
                        : 'rgba(235, 87, 87, 0.1)',
                  },
                ]}>
                {transaction.type === 'credit' ? <GainIcon /> : <LossIcon />}
              </View>

              <View style={{width: 200}}>
                <Text style={styles.transactionDesc}>{transaction.desc}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
            </View>

            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transationContainer: {
    paddingVertical: 25,
  },
  transactionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transactionHeaderText: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: fonts.grotesk_medium,
    color: colors.black,
  },
  transactionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  transactionBtnText: {
    color: colors.primary,
    fontFamily: fonts.dmsans_bold,
    fontSize: 14,
    lineHeight: 18,
  },
  transactions: {
    paddingTop: 16,
    gap: 20,
  },
  transaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionLeft: {
    flexDirection: 'row',
    gap: 12,
  },
  transactionIcon: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    backgroundColor: 'rgba(76, 217, 100, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionDesc: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: fonts.dmsans_regular,
    color: colors.gray,
  },
  transactionDate: {
    fontSize: 13,
    lineHeight: 19,
    fontFamily: fonts.dmsans_regular,
    color: colors.soft_neutral,
  },
  transactionAmount: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 15,
    lineHeight: 20,
    color: colors.gray,
  },
});
export default RecentTransactions;
