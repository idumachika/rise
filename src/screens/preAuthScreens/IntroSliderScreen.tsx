/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon';
import Button from '../../components/Button';
import {fonts} from '../../theme/theme';
import {NavigationProps} from '../../types/navigators';

const width = Dimensions.get('screen').width;

const slides = [
  {
    id: 1,
    heading: 'Quality assets',
    subheading:
      'Rise invests your money into the best dollar investments around the world.',
    bgColor: '#FEFAF7',
    textColor: '#FE7122',
    img: require('../../assets/images/slider-img-one.jpg'),
  },
  {
    id: 2,
    heading: 'Superior Selection',
    subheading:
      'Our expert team and intelligent algorithms select assets that beat the markets.',
    bgColor: '#FDF4F9',
    textColor: '#B80074',
    img: require('../../assets/images/slider-img-two.jpg'),
  },
  {
    id: 3,
    heading: 'Better Performance',
    subheading:
      'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
    bgColor: '#F6FFFE',
    textColor: '#0898A0',
    img: require('../../assets/images/slider-img-three.jpg'),
  },
];

const IntroSliderScreen = () => {
  const flatlistRef = React.useRef<FlatList | null>(null);
  const navigation = useNavigation<NavigationProps>();

  const renderItem: ListRenderItem<(typeof slides)[number]> = ({
    item,
    index,
  }) => {
    return (
      <View style={[styles.slideContainer, {backgroundColor: item.bgColor}]}>
        <Image source={item.img} style={styles.slideImg} />

        <View style={styles.dots}>
          {slides.map(slide => (
            <View
              style={[
                styles.dot,
                {
                  backgroundColor:
                    item.id === slide.id
                      ? slide.textColor
                      : 'rgba(113, 135, 156, 0.2)',
                },
              ]}
              key={slide.id}
            />
          ))}
        </View>

        <View style={{paddingTop: 50}}>
          <Text style={[styles.slideHeading, {color: item.textColor}]}>
            {item.heading}
          </Text>
          <Text style={styles.slideSubheading}>{item.subheading}</Text>
        </View>

        {item.id === 3 ? (
          <View style={styles.otherBtnContainer}>
            <Button
              onPress={() => navigation.navigate('Register')}
              text="Sign Up"
              variant="primary"
            />
            <Button
              onPress={() => navigation.navigate('Login')}
              text="Sign In"
              variant="secondary"
            />
          </View>
        ) : (
          <View style={styles.btnContainer}>
            <Pressable
              style={styles.btn}
              disabled={item.id === 1}
              onPress={() =>
                flatlistRef.current?.scrollToIndex({
                  animated: true,
                  index: index - 1,
                })
              }>
              <ArrowLeftIcon
                stroke={item.id === 1 ? '#94A1AD' : item.textColor}
              />
            </Pressable>
            <Pressable
              style={styles.btn}
              onPress={() =>
                flatlistRef.current?.scrollToIndex({
                  animated: true,
                  index: index + 1,
                })
              }>
              <Text style={[styles.btnText, {color: item.textColor}]}>
                Next
              </Text>
              <ArrowIcon stroke={item.textColor} />
            </Pressable>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <FlatList
        data={slides}
        pagingEnabled={true}
        snapToEnd
        horizontal
        ref={flatlistRef}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideContainer: {
    width,
    paddingHorizontal: 20,
  },
  slideImg: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 20,
  },
  slideHeading: {
    fontFamily: fonts.grotesk_medium,
    fontSize: 20,
    lineHeight: 26,
  },
  slideSubheading: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 22,
    color: '#222222',
    paddingTop: 12,
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: 'rgba(113, 135, 156, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  btnText: {
    fontFamily: fonts.dmsans_regular,
    fontSize: 15,
    lineHeight: 20,
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    paddingTop: 23,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6 / 2,
  },
  otherBtnContainer: {
    gap: 5,
    marginTop: 50,
  },
});
export default IntroSliderScreen;
