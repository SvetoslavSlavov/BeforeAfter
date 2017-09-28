import React, { Component } from 'react';
import {
  CameraRoll,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
  Button
} from 'react-native';
// import RNViewShot from 'react-native-view-shot';
import ViewPhotos from './ViewPhotos';


class CameraScreen extends Component {
    
      state = {
        showPhotoGallery: false,
        photoArray: []
      }
      getPhotosFromGallery= () => {
        CameraRoll.getPhotos({ first: 100 })
          .then(res => {
            let photoArray = res.edges;
            this.setState({ showPhotoGallery: true, photoArray: photoArray });
            
            
            // if (this.state.showPhotoGallery === true) {
            //     this.state.showPhotoGallery = true;
            // } else {
            //     this.state.showPhotoGallery = true;
            // }
          });
        //   this.getScreenShot();
      
    }
      
      render() {
        if (this.state.showPhotoGallery) {
          return (
            <ViewPhotos 
              photoArray={this.state.photoArray} />
              
          )
        }
        return (
            
                <View style={styles.background}>
                    
                    <TouchableHighlight
                    onPress={/*() => */this.getPhotosFromGallery}>
                    <Image
                        source={require('../assets/img/add.png')} />
                    </TouchableHighlight>
                </View>
        );
      }
    }
    const styles = {
        background: {
            backgroundColor: 'orange',
            position: 'absolute',
            left: 0,
            padding: 15
            // padding: 10,
            // margin: 100,
        },
        flex: {
            flex: 1
        }
    };
    export default CameraScreen;

