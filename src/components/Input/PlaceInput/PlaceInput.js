import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'


class PlaceInput extends Component {
  state = {
    placeName: '',
  }

  placeNameChangedHandler = (placeName) => {
    this.setState({placeName})
  }

  placeSubmitHandler = () => {
    alert(this.state.placeName)
    if(this.state.placeName.trim() === ""){
      return;
    }

    this.props.onPlaceAdded(this.state.placeName.trim());
    this.placeNameChangedHandler('')
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={() => {this.placeNameChangedHandler()}}
          placeholder="Just Type"
        />
        <Button
          title="Add Place"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
          accessibilityLabel="Add the place from your input"
        />
     </View>
    );
  }
}

const styles = StyleSheet.create({
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
})

export default PlaceInput;
  