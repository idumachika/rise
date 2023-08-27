import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import QueryProvider from './src/api/QueryProvider';
import AppNavigator from './src/navigators/AppNavigator';
import { store } from './src/store/store';
import SplashScreen from 'react-native-splash-screen';



export const navigationRef = React.createRef<NavigationContainerRef>();
console.log('navigationRef', navigationRef);
function App() {
   useEffect(() => {
     SplashScreen.hide();
   }, []);

  return (
    <SafeAreaProvider>
      <QueryProvider>
        <Provider store={store}>
          <NavigationContainer ref={navigationRef}>
            <AppNavigator />
          </NavigationContainer>
        </Provider>
      </QueryProvider>
    </SafeAreaProvider>
  );
}

export default App;
