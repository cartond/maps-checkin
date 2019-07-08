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
    placeName: '',
    places: []
  }

  placeNameChangedHandler = (placeName) => {
    this.setState({placeName})
  }

  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName.trim())
      }
    })
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => 
      <Text key={i}>{place}</Text>
    )
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            placeholder="Just Type"
            />
          <Button
           style={styles.placeButton}
            onPress={this.placeSubmitHandler}
            title="Learn More"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>
          {placesOutput}
        </View>
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
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});
