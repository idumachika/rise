import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CalenderIcon from '../../assets/icons/CalenderIcon';
import CircleXIcon from '../../assets/icons/CircleXIcon';
import GearIcon from '../../assets/icons/GearIcon';
import QuestionMarkIcon from '../../assets/icons/QuestionMarkIcon';
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import {colors, fonts} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';

const lists = [
  {
    id: 1,
    heading: 'Give us a few details',
    subheading:
      'Tell us what you want to achieve and we will help you get there',
    icon: <QuestionMarkIcon />,
  },
  {
    id: 2,
    heading: 'Turn on auto-invest',
    subheading:
      'The easiest way to get your investment working for you is to fund to periodically.',
    icon: <CalenderIcon />,
  },
  {
    id: 3,
    heading: 'Modify as you progress',
    subheading:
      'You are in charge. Make changes to your plan, from adding funds, funding source, adding money to your wallet and more.',
    icon: <GearIcon />,
  },
];

const CreatePlanScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  console.log('navigation', navigation);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Heading
          heading="Create a plan"
          subheading="Reach your goals faster"
          icon={<CircleXIcon />}
        />

        <View style={styles.planImgContainer}>
          <Image
            source={require('../../assets/images/plan-deco.png')}
            style={styles.planImg}
          />
        </View>

        <View style={styles.lists}>
          {lists?.map(list => (
            <View style={styles.list} key={list.id}>
              <View style={styles.listIcon}>{list.icon}</View>

              <View>
                <Text style={styles.listHeading}>{list.heading}</Text>
                <Text style={styles.listSubheading}>{list.subheading}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.footer}>
          <Button
            onPress={() => navigation.navigate('GoalName')}
            text="Continue"
            variant="primary"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  planImgContainer: {
    marginTop: 62,
    alignItems: 'center',
    justifyContent: 'center',
  },
  planImg: {
    width: 100,
    height: 100,
  },
  lists: {
    marginVertical: 55,
    gap: 25,
  },
  list: {
    flexDirection: 'row',
    gap: 20,
  },
  listHeading: {
    fontFamily: fonts.dmsans_bold,
    fontSize: 15,
    lineHeight: 20,
    color: '#222222',
  },
  listSubheading: {
    paddingTop: 6,
    fontFamily: fonts.dmsans_regular,
    fontSize: 13,
    lineHeight: 19,
    color: colors.soft_neutral,
  },
  listIcon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 50,
  },
});

export default CreatePlanScreen;
