import React from 'react';
import { View, StyleSheet } from 'react-native'


const placeList = props => {
  const placesOutput = props.places.map((place, i) => 
    <ListItem key={i} placeName={place}></ListItem>
  );

  return (
    <View style={styles.listContainer}>
      {placesOutput}
    </View>
  );
  };

const styles = StyleSheet.create({
  placeInput: {
    width: '70%'
  }
})

export default placeList;
  