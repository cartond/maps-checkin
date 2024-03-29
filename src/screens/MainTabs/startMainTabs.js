import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then(source => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'maps-checkin.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: source[0]
        },{
          screen: 'maps-checkin.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: source[1]
        }
      ]
    });
  });
};

export default startTabs;