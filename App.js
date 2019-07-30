import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';

const store = configureStore();

//Register Screens
Navigation.registerComponent("maps-checkin.AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent("maps-checkin.SharePlaceScreen", () => SharePlaceScreen, store, Provider);
Navigation.registerComponent("maps-checkin.FindPlaceScreen", () => FindPlaceScreen, store, Provider);
Navigation.registerComponent("maps-checkin.PlaceDetailScreen", () => PlaceDetailScreen, store, Provider);

//Start navigation app
Navigation.startSingleScreenApp({
  screen: {
    screen: "maps-checkin.AuthScreen",
    title: "Login"
  }
});
