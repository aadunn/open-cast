import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainScreen from  './scenes/main-screen';
import webBrowserScreen from  './scenes/web-browser-screen';
import photosScreen from  './scenes/photos-screen';

const RootStack = StackNavigator(
  {
    main: {
      screen: MainScreen
    },
    webBrowser: {
      screen: webBrowserScreen
    },
    photos: {
      screen: photosScreen
    },
  },
  {
    initialRouteName: 'main',
  },
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}