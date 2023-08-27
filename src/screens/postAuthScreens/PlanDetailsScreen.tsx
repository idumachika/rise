/* eslint-disable react-native/no-inline-styles */
import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetPlan} from '../../api/plans/useGetPlan';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import CrossIcon from '../../assets/icons/CrossIcon';
import HelpIcon from '../../assets/icons/HelpIcon';
import VerticalElipsisIcon from '../../assets/icons/VerticalElipsisIcon';
import PlanChart from '../../components/PlanChart';
import PlanDetailsLists from '../../components/PlanDetailsLists';
import RecentTransactions from '../../components/RecentTransactions';
import {colors, fonts} from '../../theme/theme';
import {RouteProps} from '../../types/navigators';

const PlanDetailsScreen = () => {
  const navigation = useNavigation();
    console.log('navigation', navigation);

  const route = useRoute<RouteProps<'PlanDetails'>>();
  const {data: plan, isLoading} = useGetPlan(route.params.id);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator color={colors.primary} />
        ) : (
          <>
            <ImageBackground
              source={require('../../assets/images/plan-bg.png')}
              style={styles.detailsHeader}>
              <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
                <ArrowRightIcon />
              </Pressable>

              <View>
                <Text style={styles.detailsHeading}>Start a business</Text>
                <Text style={styles.detailsSubheading}>for Kate Ventures</Text>
              </View>

              <Pressable style={styles.btn}>
                <VerticalElipsisIcon />
              </Pressable>
            </ImageBackground>

            <View style={{paddingHorizontal: 20}}>
              <View style={styles.balanceHeader}>
                <Text style={styles.balanceHeading}>Plan Balance</Text>
                <Text style={styles.balance}>$0.00</Text>
                <View style={styles.otherBalance}>
                  <Text style={styles.otherBalanceText}>~ ₦0.00</Text>
                  <HelpIcon />
                </View>
                <View>
                  <Text style={styles.balanceText}>Gains</Text>
                  <Text style={styles.balanceOtherText}>
                    +$5,000.43 • +12.4%{' '}
                  </Text>
                </View>
              </View>

              <View style={{paddingTop: 20}}>
                <View style={styles.progressContainer}>
                  <Text style={styles.progresText}>0.01 achieved</Text>
                  <Text style={styles.progresText}>Target: $20,053.90</Text>
                </View>
                <View style={styles.progress}>
                  <View style={styles.progressPercent} />
                </View>
              </View>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Results are updated monthly</Text>
              </View>

              <Pressable style={styles.bigBtn}>
                <CrossIcon />
                <Text style={styles.bigBtnText}>Fund plan</Text>
              </Pressable>

              <PlanChart />

              <PlanDetailsLists />

              <RecentTransactions />
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsHeader: {
    paddingHorizontal: 20,
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36 / 2,
  },
  detailsHeading: {
    fontSize: 24,
    lineHeight: 26,
    fontFamily: fonts.grotesk_bold,
    textAlign: 'center',
    color: colors.white,
  },
  detailsSubheading: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.dmsans_regular,
  },
  balanceHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  balanceHeading: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.soft_neutral,
    textAlign: 'center',
  },
  balance: {
    fontFamily: fonts.grotesk_bold,
    fontSize: 24,
    lineHeight: 26,
    color: '#012224',
    textAlign: 'center',
  },
  otherBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingTop: 3,
  },
  otherBalanceText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 20,
    color: colors.soft_neutral,
    textAlign: 'center',
  },
  balanceText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: '#012224',
    textAlign: 'center',
    paddingTop: 12,
  },
  balanceOtherText: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 16,
    lineHeight: 19,
    color: '#27BF41',
    textAlign: 'center',
    paddingTop: 5,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progresText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.soft_neutral,
  },
  progress: {
    height: 10,
    backgroundColor: 'rgba(113, 135, 156, 0.2)',
    borderRadius: 10,
    marginTop: 15,
    position: 'relative',
  },
  progressPercent: {
    position: 'absolute',
    height: '100%',
    width: '5%',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  infoContainer: {
    alignSelf: 'center',
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 12,
    marginTop: 35,
  },
  infoText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 13,
    lineHeight: 19,
    color: colors.soft_neutral,
  },
  bigBtn: {
    paddingVertical: 18,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  bigBtnText: {
    textAlign: 'center',
    color: colors.primary,
    fontFamily: fonts.dmsans_bold,
    fontSize: 15,
    lineHeight: 20,
  },
});
export default PlanDetailsScreen;
