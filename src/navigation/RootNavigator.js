import {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import NavigationService from './NavigationService';
import MainStack from './MainStackNavigator';

export default function RootNavigator(props) {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();

  return (
    <NavigationContainer
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}
      onStateChange={() => {
        const currentRouteName = navigationRef.getCurrentRoute().name;
        routeNameRef.current = currentRouteName;
      }}
      {...props}
      ref={navigatorRef => {
        navigationRef.current = navigatorRef;
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <MainStack />
    </NavigationContainer>
  );
}
