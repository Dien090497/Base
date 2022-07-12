import {Platform} from 'react-native';
import transition from './transition';

export const stackNavigationConfigs: any = {
  cardStyle: {
    backgroundColor: '#fff',
  },
  headerShown: false,
  gestureEnabled: Platform.OS === 'ios',
  keyboardHandlingEnabled: Platform.OS === 'ios',
  cardShadowEnabled: true,
  cardOverlayEnabled: true,
  transitionSpec: {
    open: transition,
    close: transition,
  },
};
