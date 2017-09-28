import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  ListView,
  Dimensions,
  AsyncStorage,
  Button,
} from 'react-native';
import SelectedPhoto from './SelectedPhoto';

class ViewPhotos extends Component {
    
    state = {
      ds: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      showSelectedPhoto: false,
      uri: ''
    }
    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        console.log('asa');
    }
    sideBySide() {
        this.navigation.props.navigation.navigate('Photos');
    }
    renderRow(rowData) {
        console.log(rowData.node.image.uri);
      const { uri } = rowData.node.image;
      return (
        <TouchableHighlight
          onPress={() => this.setState({ showSelectedPhoto: true, uri: uri })}>
          <Image
            source={{ uri: rowData.node.image.uri }}
            
            style={styles.image} />
        </TouchableHighlight>
        )
    }
  
    render() {
        
      const { showSelectedPhoto, uri } = this.state;
      AsyncStorage.setItem('image1', uri);
      console.log(uri+'thisis');
      return (
        
        <View style={{ flex: 1 }}>
        {showSelectedPhoto ? <SelectedPhoto
          style={styles.background}
         uri={uri} /> 
         : null}   
          {/* <View style={{ alignItems: 'center', marginTop: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Pick A Photo </Text>
          </View> */}
         
        {!showSelectedPhoto ?
        <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.ds.cloneWithRows(this.props.photoArray)}
            renderRow={(rowData) => this.renderRow(rowData)}
            enableEmptySections={true} />
            : null}
        </View>
    
      );
    
    }
  }
  
  const styles = StyleSheet.create({
    list: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
  
    image: {
      width: 110,
      height: 120,
      marginLeft: 10,
      marginTop: 10,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#979797'
    },
    background: {
        backgroundColor: 'orange',
        // flex: 1,
        // height: Dimensions.get('window').height,
        // width: Dimensions.get('window').width
    }
  })
  
  export default ViewPhotos;

