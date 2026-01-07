import { NavigatorScreenParams } from '@react-navigation/native';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  Details: { shipmentId: string };
};

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  History: undefined;
  Shipments: undefined;
  Wallet: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  App: NavigatorScreenParams<TabParamList>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

