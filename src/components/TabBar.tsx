import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FeedIcon from '../assets/icons/FeedIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import PlansIcon from '../assets/icons/PlansIcon';
import WalletIcon from '../assets/icons/WalletIcon';
import {colors, fonts} from '../theme/theme';

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icons = {
          Dashboard: <HomeIcon fill={isFocused ? '#41BCC4' : '#94A1AD'} />,
          Plans: <PlansIcon fill={isFocused ? '#41BCC4' : '#94A1AD'} />,
          Wallet: <WalletIcon fill={isFocused ? '#41BCC4' : '#94A1AD'} />,
          Feed: <FeedIcon fill={isFocused ? '#41BCC4' : '#94A1AD'} />,
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            {icons[label as keyof typeof icons]}
            {isFocused ? (
              <View style={styles.tabDot} />
            ) : (
              <Text style={styles.tabText}>{label}</Text>
            )}
          </TouchableOpacity>
        );
      })}

      <View style={styles.tab}>
        <Image
          source={require('../assets/images/user.jpg')}
          style={styles.userImg}
        />
        <Text style={styles.tabText}>Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E4E7EB',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 12,
    lineHeight: 16,
    color: '#94A1AD',
    paddingTop: 5,
  },
  tabDot: {
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
    backgroundColor: colors.primary,
    marginTop: 10,
  },
  userImg: {
    width: 24,
    height: 24,
    borderRadius: 24 / 2,
  },
});

export default TabBar;
