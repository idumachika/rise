import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NumericFormat} from 'react-number-format';
import {useGetCurrentUser} from '../../api/dashboard/useGetCurrentUser';
import BellIcon from '../../assets/icons/BellIcon';
import EyeClosedIcon from '../../assets/icons/EyeClosedIcon';
import IncreaseArrowIcon from '../../assets/icons/IncreaseArrowIcon';
import Logo from '../../assets/icons/Logo';
import PlusIcon from '../../assets/icons/PlusIcon';
import RightChevronIcon from '../../assets/icons/RightChevronIcon';
import ContactBanner from '../../components/ContactBanner';
import Plans from '../../components/Plans';
import TodaysQuote from '../../components/TodaysQuote';
import {colors, fonts} from '../../theme/theme';

const DashboardScreen = () => {
  const {data: user, isLoading} = useGetCurrentUser();
   console.log('navigation', isLoading);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator color={colors.primary} />
        ) : (
          <>
            <ImageBackground
              style={styles.dashboardBg}
              source={require('../../assets/images/dashboard-bg.png')}>
              <View style={styles.header}>
                <View>
                  <Text style={styles.greeting}>Good morning ☀</Text>
                  <Text style={styles.userName}>{user?.first_name}</Text>
                </View>

                <View style={styles.actions}>
                  <Pressable style={styles.earnBtn}>
                    <Text style={styles.earnBtnText}>Earn 3% bonus</Text>
                  </Pressable>

                  <View style={styles.notification}>
                    <Pressable>
                      <BellIcon />
                    </Pressable>

                    <View style={styles.notificationCount}>
                      <Text style={styles.notificationCountText}>9+</Text>
                    </View>
                  </View>
                </View>
              </View>

              <LinearGradient
                colors={[
                  'rgba(255, 255, 255, 0.8)',
                  'rgba(255, 255, 255, 0) 103.15%)',
                ]}
                style={styles.balanceContainer}>
                <View style={styles.balanceHeader}>
                  <Text style={styles.balanceText}>Total Balance</Text>
                  <Pressable>
                    <EyeClosedIcon width={13} height={9} />
                  </Pressable>
                </View>

                <NumericFormat
                  value={user?.total_balance}
                  prefix="$"
                  displayType="text"
                  fixedDecimalScale
                  decimalScale={2}
                  renderText={value => (
                    <Text style={styles.balance}>{value}</Text>
                  )}
                />

                <View style={styles.seprator} />

                <View style={styles.balanceFooter}>
                  <Text style={styles.balanceText}>Total Gains</Text>
                  <View style={styles.balanceFooterValueContainer}>
                    <IncreaseArrowIcon />
                    <Text style={styles.balanceFooterValue}>0.00%</Text>
                  </View>

                  <Pressable>
                    <RightChevronIcon />
                  </Pressable>
                </View>

                <View style={styles.swiperContainer}>
                  <View style={styles.swiperActive} />
                  <View style={styles.swiper} />
                  <View style={styles.swiper} />
                </View>
              </LinearGradient>

              <Pressable style={styles.depositBtn}>
                <PlusIcon />
                <Text style={styles.depositBtnText}>Add money</Text>
              </Pressable>
            </ImageBackground>

            <Plans />

            <ContactBanner />

            <TodaysQuote />

            <View style={styles.footer}>
              <Logo fill={'rgba(113, 135, 156, 0.2)'} />
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
  dashboardBg: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  greeting: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.gray,
  },
  userName: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 20,
    lineHeight: 26,
    color: colors.gray,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  earnBtn: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: colors.primary,
  },
  earnBtnText: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.dmsans_regular,
  },
  notification: {
    position: 'relative',
  },
  notificationCount: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: colors.error,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -10,
    right: 0,
  },
  notificationCountText: {
    color: '#fff',
    fontFamily: fonts.grotesk_medium,
    fontSize: 12,
    lineHeight: 14,
  },
  balanceContainer: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  balanceText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.soft_neutral,
  },
  balance: {
    color: colors.gray,
    fontFamily: fonts.grotesk_medium,
    fontSize: 32,
    lineHeight: 38,
    textAlign: 'center',
    marginTop: 12,
  },
  balanceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
  },
  balanceFooterValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  balanceFooterValue: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 16,
    lineHeight: 19,
    color: '#27BF41',
  },
  seprator: {
    marginTop: 15,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    width: 197,
    height: 1,
    alignSelf: 'center',
  },
  swiperContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 8,
  },
  swiperActive: {
    width: 12,
    height: 5,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  swiper: {
    width: 5,
    height: 5,
    bordeRadius: 5 / 2,
    backgroundColor: 'rgba(113, 135, 156, 0.2)',
  },
  depositBtn: {
    paddingVertical: 20,
    paddingHorizontal: 120,
    borderColor: 'rgba(113, 135, 156, 0.2)',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    marginTop: 25,
  },
  depositBtnText: {
    color: colors.primary,
    fontFamily: fonts.dmsans_bold,
    fontSize: 15,
    lineHeight: 20,
  },
  footer: {
    marginVertical: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;
