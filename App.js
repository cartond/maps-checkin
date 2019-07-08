/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/Input/PlaceInput/PlaceInput'

export default class App extends Component {
  state = {
    places: []
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <ListItem places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    alignItems: "center",
  },

  listContainer: {
    width: '100%'
  }
});
