import React, { Component } from 'react';
import {
  CameraRoll,
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View,
  AsyncStorage,
  StatusBar,
  Button,
} from 'react-native';

import Camera from 'react-native-camera';
import { StackNavigator } from 'react-navigation';
import CameraScreen from './CameraScreen';


export default class BeforeAndAfter extends Component {
  
  constructor() {
    super();
    this.state = {
      image: ''
    };
  }
  takePicture() {
   this.camera.capture()
    // .then((data) => console.log(data))
    .then((data) => {
        AsyncStorage.setItem('image', data.path);
        console.log(data.path);
        this.props.navigation.navigate('Photos');  
    })
     .catch(err => console.error(err));
 }
componentWillUnmount = () => {
    AsyncStorage.setItem('image', null);
}
 componentDidMount = () => {
    AsyncStorage.setItem('image', this.state.image);
} 
render() {
  
  return ( 
        <View style={styles.container}>
           
        <StatusBar
       barStyle="light-content"
       backgroundColor='red'
     />
        <Camera
            ref={(cam) => {
            this.camera = cam;
            }}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
            <CameraScreen />
            <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
        </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width,
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    position: 'absolute',
    padding: 20,
    // margin: 0,
    // width: 100,
    // height: 50,
    // padding: 10,
    // margin: 40

  },
  statusBar: {
  }
});

