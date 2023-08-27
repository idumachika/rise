/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetCurrentUser} from '../../api/dashboard/useGetCurrentUser';
import {useCreatePlan} from '../../api/plans/useCreatePlan';
import CircleBackIcon from '../../assets/icons/CircleBackIcon';
import InfoIcon from '../../assets/icons/InfoIcon';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import {useAppSelector} from '../../hooks/store';
import {colors, fonts} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';

const tags = [
  {
    id: 1,
    name: 'Investments • $50,400',
    color: '#94A1AD',
  },
  {
    id: 2,
    name: 'Returns • $20,803',
    color: colors.primary,
  },
];

const ReviewScreen = () => {
  const navigation = useNavigation<NavigationProps>();
    console.log('navigation', navigation);

  const plans = useAppSelector(state => state.plan);
  const createPlan = useCreatePlan();
  const {data} = useGetCurrentUser();

  const onCreatePlan = () => {
    const date = `${new Date(plans.maturity_date).getFullYear()}0-${
      new Date(plans.maturity_date).getMonth() + 1
    }-${new Date(plans.maturity_date).getDate()}`;

    const newPlan = {...plans, maturity_date: date};

    createPlan.mutate(newPlan, {
      onSuccess: () => {
        navigation.navigate('Success', {
          heading: 'You just created your plan.',
          subheading: `Well done, ${data?.first_name}`,
          btnText: 'View plan',
          location: 'Dashboard',
        });
      },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal: 20}}>
          <Heading heading="Review" icon={<CircleBackIcon />} />
        </View>

        <View style={styles.header}>
          {/* <View style={styles.reveiewHeader}> */}
          <Text style={styles.reviewSubheading}>Kate Ventures</Text>
          <Text style={styles.reviewHeading}>$10,930.75</Text>
          <Text style={styles.reviewDate}>by 20 June 2021</Text>
          {/* </View> */}

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

        <Image
          source={require('../../assets/images/graph.png')}
          style={styles.graphImg}
        />

        <View style={styles.estimateContainer}>
          <Text style={styles.estimateHeading}>
            Estimated monthly investment
          </Text>
          <Text style={styles.estimateAmount}>$120</Text>
        </View>

        <View style={{paddingHorizontal: 20}}>
          <View style={styles.infoContainer}>
            <InfoIcon />
            <Text style={styles.infoText}>
              Returns not guaranteed. Investing involves risk. Read our
              Disclosures.
            </Text>
          </View>
        </View>

        <Text style={styles.otherInfoText}>
          These are your starting settings, they can always be updated.
        </Text>

        <View style={styles.btnContainer}>
          <Button
            onPress={onCreatePlan}
            disabled={createPlan.isLoading}
            text={
              createPlan.isLoading ? (
                <ActivityIndicator color={colors.black} />
              ) : (
                'Agree & Continue'
              )
            }
            variant="primary"
          />
          <Button
            onPress={() => navigation.navigate('CreatePlan')}
            text="Start over"
            variant="secondary"
            disabled={createPlan.isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  reviewSubheading: {
    textAlign: 'center',
    fontFamily: fonts.dmsans_regular,
    fontSize: 12,
    lineHeight: 16,
    color: colors.soft_neutral,
  },
  reviewHeading: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: fonts.grotesk_bold,
    lineHeight: 26,
    color: colors.black,
  },
  reviewDate: {
    textAlign: 'center',
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.gray,
    paddingTop: 5,
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
    color: colors.gray,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.dmsans_regular,
  },
  graphImg: {
    width: '100%',
    height: 218,
    marginTop: 35,
  },
  estimateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 30,
    borderBottomColor: 'rgba(113, 135, 156, 0.2)',
    borderBottomWidth: 1,
  },
  estimateHeading: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: colors.soft_neutral,
  },
  estimateAmount: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 14,
    lineHeight: 13,
  },
  infoContainer: {
    marginTop: 27,
    backgroundColor: 'rgba(113, 135, 156, 0.05)',
    padding: 10,
    // paddingHorizontal: 32,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  infoText: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: fonts.dmsans_regular,
    color: colors.soft_neutral,
    width: 263,
  },
  otherInfoText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.dmsans_regular,
    color: colors.soft_neutral,
    textAlign: 'center',
    width: 334,
    alignSelf: 'center',
    paddingTop: 28,
  },
  btnContainer: {
    gap: 5,
    marginVertical: 30,
    paddingHorizontal: 20,
  },
});
export default ReviewScreen;
