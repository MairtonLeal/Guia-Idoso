/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';

class Feed extends Component {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
        }}>
        <View style={{flex: 2}}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View style={{flex: 1, paddingLeft: 5, paddingTop: 10}}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text
              style={{
                color: '#4682b4',
                fontSize: 14,
                // opacity: 0.5,
                textAlign: 'center',
              }}>
              {this.props.name}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Feed;
