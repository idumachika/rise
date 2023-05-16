/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NumericFormat} from 'react-number-format';
import {useGetPlans} from '../api/plans/useGetPlans';
import CirclePlusIcon from '../assets/icons/CirclePlusIcon';
import RightChevronIcon from '../assets/icons/RightChevronIcon';
import {colors, fonts} from '../theme/theme';
import {NavigationProps} from '../types/navigators';

const Plans = () => {
  const navigation = useNavigation<NavigationProps>();
  const {data: plans} = useGetPlans();

  // console.log('plans', plans);

  return (
    <View style={styles.plansContainer}>
      <View style={styles.header}>
        <Text style={styles.heading}>
          {plans?.item_count ? 'Plans' : 'Create a plan'}
        </Text>

        <Pressable
          style={styles.viewMoreBtn}
          disabled={(plans?.item_count as number) === 0}>
          <Text
            style={[
              styles.viewMoreBtnText,
              {color: plans?.item_count ? colors.primary : '#94A1AD'},
            ]}>
            View all plans
          </Text>
          <RightChevronIcon />
        </Pressable>
      </View>
      <Text style={styles.subheading}>
        Start your investment journey by creating a plan"
      </Text>

      <FlatList
        horizontal
        data={plans?.items}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.plans}
        keyExtractor={item => String(item.id)}
        ListHeaderComponent={
          <Pressable
            onPress={() => navigation.navigate('CreatePlan')}
            style={styles.newPlanBtn}>
            <CirclePlusIcon />
            <Text style={styles.planText}>Create an investment plan</Text>
          </Pressable>
        }
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('PlanDetails', {
                id: item.id,
              })
            }>
            <ImageBackground
              resizeMethod="scale"
              source={require('../assets/images/plan-card-bg.jpg')}
              style={styles.plan}>
              <Text style={styles.name}>{item.plan_name}</Text>
              <NumericFormat
                value={item.target_amount}
                prefix="$"
                displayType="text"
                fixedDecimalScale
                decimalScale={2}
                renderText={value => (
                  <Text style={styles.targetAmount}>{value}</Text>
                )}
              />
              <Text style={styles.name}>Mixed assets</Text>
            </ImageBackground>
          </Pressable>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  plansContainer: {
    marginTop: 32,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  viewMoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  viewMoreBtnText: {
    fontFamily: fonts.dmsans_bold,
    fontSize: 14,
    lineHeight: 18.25,
  },
  heading: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 18,
    lineHeight: 21.6,
    color: colors.black,
  },
  subheading: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    paddingTop: 12,
    maxWidth: 335,
    color: colors.soft_neutral,
    paddingHorizontal: 20,
  },
  plans: {
    marginTop: 20,
    gap: 20,
    paddingHorizontal: 20,
  },
  newPlanBtn: {
    width: 188,
    height: 245,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plan: {
    width: 188,
    height: 245,
    borderRadius: 12,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    paddingHorizontal: 13,
    paddingVertical: 25,
  },
  planText: {
    fontFamily: fonts.dmsans_bold,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    color: colors.gray,
    width: 120,
    paddingTop: 8,
  },
  name: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: '#fff',
  },
  targetAmount: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 18,
    lineHeight: 22,
    color: '#fff',
    letterSpacing: 0.2,
  },
});

export default Plans;
