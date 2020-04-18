/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StatusBar,
  AsyncStorage,
} from 'react-native';

class Intro extends React.Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      const splahIsShow = await AsyncStorage.getItem('splashIsShow');
      if (splahIsShow === null) {
        AsyncStorage.setItem('splashIsShow', 'true');
        this.props.navigation.navigate('Inicio');
      } else {
        this.setState({showRealApp: true});
        this.props.navigation.navigate('Inicio');
      }
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        {/* <StatusBar backgroundColor="#E1f434" barStyle="dark-content" /> */}
        <Image
          source={require('./../images/logo.png')}
          style={{
            resizeMode: 'contain',
            width: Dimensions.get('window').width * 0.2,
            height: Dimensions.get('window').width * 0.2,
            alignSelf: 'center',
          }}
        />
        <Text style={styles.textStyles}>Guia Idoso</Text>
        <Text style={styles.textStyles}>Seja bem vindo.</Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eef2f9',
  },
  textStyles: {
    color: '#4682b4',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
};

export default Intro;
