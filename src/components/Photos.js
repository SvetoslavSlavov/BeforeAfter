import React, { Component } from 'react';
import {
    CameraRoll,
    Image,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Dimensions,
    AsyncStorage,
    ListView,
    Button
  } from 'react-native';
  import ViewShot from 'react-native-view-shot';
  import SelectedPhoto from './SelectedPhoto';
  import RNViewShot from 'react-native-view-shot';
  import { captureRef } from 'react-native-view-shot';
  
class Photos extends Component {
    
    constructor() {
        super();
        this.state = {
          image1: '',
          image2: '',  
        };
        this.onRetrieve = this.onRetrieve.bind(this);
      }
      
    componentDidMount = () => {
            this.onRetrieve();
    }
    // componentDidUpdate = () => {
    //     this.onRetrieve();
    // }
    // componentDidMount = () => {
    //     this.refs.viewShot.capture().then(uri => {
    //       console.log('do something with ', uri);
    //       CameraRoll.saveToCameraRoll(uri);
          
    //     });
    //   }
    
    onImageLoad = () => {
        
        this.refs.viewShot.capture().then(uri => {
            
          console.log('do something with ', uri);
          CameraRoll.saveToCameraRoll(uri);
        });
      };
    // onImageLoad = () => {
    //     this.refs.viewShot.capture().then(uri => {
    //       console.log(uri+ 'QWQWQWQWQWQ');
    //     });
    //   };  
    async onRetrieve() {
        // AsyncStorage.getItem(('image').then(function(data) {
        //     console.log(data);
        // });
        
        // console.log(img);
        // this.setState({ image1: AsyncStorage.getItem('image'), image2: AsyncStorage.getItem('image1') });
        this.state.image1 = await AsyncStorage.getItem('image');
        this.state.image2 = await AsyncStorage.getItem('image1');
        let img = await AsyncStorage.getItem('image');
        let img2 = await AsyncStorage.getItem('image1');
        if (img!==undefined) {
            this.setState({ image1: img });
        }
        if (img2!==undefined) {
            this.setState({ image2: img2 });
        }
        const width = Dimensions.get('window').width;
        
    }
    /* Row */
    
    render() {
        const image = this.state.image1;
        const image2 = this.state.image2;
        console.log(image);
        return (
            <View style={styles.container}>
            <Button style={styles.button}title='Back' onPress={() => this.props.navigation.goBack()} />    
            <ViewShot ref="viewShot">
            <View style={styles.listView}>
               
                 <Image
                 style={styles.dimension}
                 source={{ uri: image }} />
                 <Image
                 onLoad={this.onImageLoad}
                 style={styles.dimension}
                 source={{ uri: image2 }} />
                 {/* <SelectedPhoto source={{ uri: image }} /> */}
                 
            </View>  
            </ViewShot>
            </View>  
        );
    }
}
const styles = {
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    listView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      card: {
        backgroundColor: 'red',
        width: (Dimensions.get('window').width / 2) - 15,
        height: 300,
        marginLeft: 10,
        marginTop: 10
      }, 
      dimension: {
        height: Dimensions.get('window').height,
        width: (Dimensions.get('window').width / 2),
      },
      button: {
          textAlign: 'center'
      }
};

export default Photos;
