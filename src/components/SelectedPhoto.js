import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  Dimensions,
  Button
} from 'react-native';

const SelectedPhoto = (props) => {
  const { uri } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: uri}}
        style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    opacity: 0.4
  }
});

export default SelectedPhoto;
