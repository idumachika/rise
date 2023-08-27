import {NavigatorScreenParams} from '@react-navigation/native';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
  MoreInfo: {
    email_address: string;
    password: string;
  };
  Success: {
    heading: string;
    subheading: string;
    btnText: string;
    location: keyof RootStackParamList;
  };
  SetPin: undefined;
  Tab: undefined;
  CreatePlan: undefined;
  GoalName: undefined;
  TargetAmount: undefined;
  TargetDate: undefined;
  Review: undefined;
  PlanDetails: {
    id: string;
  };
  IntroSlider: undefined;
  Dashboard: undefined;
};

export type BottomTabStackParamList = {
  Dashboard: NavigatorScreenParams<RootStackParamList>;
  Plans: undefined;
  Feed: undefined;
  Wallet: undefined;
  //SettingNavigator: BottomTabNavigationProp<SettingStackParamList>;
};

// export type SettingStackParamList = {
//   Setting: undefined;
//   PasswordReset: undefined;
// };

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type RouteProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>['route'];
