import React from "react";
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons'

const placeDetail = props => {
  return (
    <View style={styles.modalContainer}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon name="ios-trash" color="red" size={40} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
    marginTop: 36
  },
  placeImage: {
    width: "100%",
    height: 200
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

export default placeDetail;
