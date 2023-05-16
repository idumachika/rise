import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CheckIcon from '../../assets/icons/CheckIcon';
import Button from '../../components/Button';
import {colors, fonts} from '../../theme/theme';
import {NavigationProps, RouteProps} from '../../types/navigators';

const SuccessScreen = () => {
  const route = useRoute<RouteProps<'Success'>>();
  console.log('error=====', route);
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.checkContainer}>
          <CheckIcon />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{route.params.heading}</Text>
          <Text style={styles.subheading}>{route.params.subheading}</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button
          text={route.params.btnText}
          onPress={() =>
            navigation.navigate(route.params.location, {screen: 'Dashboard'})
          }
          variant="primary"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  checkContainer: {
    width: 90,
    height: 90,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    borderRadius: 90 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  header: {
    width: 240,
    alignSelf: 'center',
    flex: 1,
    paddingTop: 125,
  },
  textContainer: {
    marginTop: 36,
  },
  heading: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 20,
    lineHeight: 26,
    textAlign: 'center',
    color: '#222222',
  },
  subheading: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    color: colors.soft_neutral,
    paddingTop: 5,
  },
  btnContainer: {
    paddingBottom: 64,
  },
});

export default SuccessScreen;
