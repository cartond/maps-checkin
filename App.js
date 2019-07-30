import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

//Register Screens
Navigation.registerComponent("maps-checkin.AuthScreen", () => AuthScreen);
Navigation.registerComponent("maps-checkin.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("maps-checkin.FindPlaceScreen", () => FindPlaceScreen);

//Start navigation app
Navigation.startSingleScreenApp({
  screen: {
    screen: "maps-checkin.AuthScreen",
    title: "Login"
  }
});
