import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../../assets/icons/Logo';
import {fonts} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#0898A0'} />
      <View style={styles.header}>
        <Logo />
        <Text style={styles.headerText}>
          Dollar investments that help you grow{' '}
        </Text>
      </View>

      <Pressable onPress={() => navigation.navigate('IntroSlider')}>
        <Text>Register</Text>
      </Pressable>

      <View>
        <Text style={styles.footerText}>All rights reserved</Text>
        <Text style={styles.footerText}>(c) 2021</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0898A0',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 18,
    lineHeight: 22,
    paddingTop: 20,
    color: '#fff',
    width: 197,
    textAlign: 'center',
  },
  footerText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 12,
    lineHeight: 14.5,
    width: 197,
    textAlign: 'center',
    color: '#fff',
  },
});

export default Home;
