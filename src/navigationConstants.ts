import {DefaultTheme} from '@react-navigation/native';

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

export const config = {
  screens: {
    Main: {
      screens: {
        Browse: {
          path: 'browser',
        },
      },
    },
  },
};

export const linking = {
  prefixes: ['mobilewallet://', 'mobilewallet'],
  config,
};
