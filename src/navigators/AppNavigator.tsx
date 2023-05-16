import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CreatePlanScreen from '../screens/postAuthScreens/CreatePlanScreen';
import GoalNameScreen from '../screens/postAuthScreens/GoalNameScreen';
import MoreInfoScreen from '../screens/postAuthScreens/MoreInfoScreen';
import PlanDetailsScreen from '../screens/postAuthScreens/PlanDetailsScreen';
import ReviewScreen from '../screens/postAuthScreens/ReviewScreen';
import TargetAmountScreen from '../screens/postAuthScreens/TargetAmountScreen';
import TargetDateScreen from '../screens/postAuthScreens/TargetDateScreen';
import Home from '../screens/preAuthScreens/Home';
import IntroSliderScreen from '../screens/preAuthScreens/IntroSliderScreen';
import LoginScreen from '../screens/preAuthScreens/LoginScreen';
import RegisterScreen from '../screens/preAuthScreens/RegisterScreen';
import SetPinScreen from '../screens/preAuthScreens/SetPinScreen';
import SuccessScreen from '../screens/preAuthScreens/SuccessScreen';
import {RootStackParamList} from '../types/navigators';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const [token, setToken] = React.useState('');

  React.useEffect(() => {
    const getToken = async () => {
      const newToken = await AsyncStorage.getItem('token');
      setToken(newToken as string);
    };

    getToken();
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!token ? (
        <>
          <Stack.Screen name="IntroSlider" component={IntroSliderScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="MoreInfo" component={MoreInfoScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Tab" component={BottomTabNavigator} />
          <Stack.Screen name="CreatePlan" component={CreatePlanScreen} />
          <Stack.Screen name="GoalName" component={GoalNameScreen} />
          <Stack.Screen name="TargetAmount" component={TargetAmountScreen} />
          <Stack.Screen name="TargetDate" component={TargetDateScreen} />
          <Stack.Screen name="Review" component={ReviewScreen} />
          <Stack.Screen name="PlanDetails" component={PlanDetailsScreen} />
        </>
      )}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SetPin" component={SetPinScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
