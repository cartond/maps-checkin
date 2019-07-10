import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';

//Register Screens
Navigation.registerComponent("maps-checkin.AuthScreen", () => AuthScreen);

//Start navigation app
Navigation.startSingleScreenApp({
  screen: {
    screen: "maps-checkin.AuthScreen",
    title: "Login"
  }
});
