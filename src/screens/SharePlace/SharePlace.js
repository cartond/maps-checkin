import React, { Component } from 'React';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends Component {
  placeAddHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render () {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);