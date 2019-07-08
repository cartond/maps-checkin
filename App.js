/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (placeName) => {
    this.setState({placeName})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={{width: 300, fontSize: 32}}
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          placeholder="Just Type"
        />
        <Text
          style={{fontSize: 24}}
        >
          {this.state.placeName}
        </Text>
        <Button
          onPress={() => alert('doot')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
