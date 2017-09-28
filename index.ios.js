import React, { Component } from 'react';
import {
  CameraRoll,
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View,
  AsyncStorage
} from 'react-native';

import Camera from 'react-native-camera';
import { StackNavigator } from 'react-navigation';
import CameraScreen from './src/components/CameraScreen';
import BeforeAndAfter from './src/components/BeforeAndAfter';
import Photos from './src/components/Photos';
import SelectedPhoto from './src/components/SelectedPhoto';

const Nav = StackNavigator({
  Home: { screen: BeforeAndAfter },
  Photos: { screen: Photos },
  SelectedPhoto: { screen: SelectedPhoto }
}, { headerMode: 'none' });

AppRegistry.registerComponent('BeforeAndAfter', () => Nav);
