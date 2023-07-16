import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Details: {id: string};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
