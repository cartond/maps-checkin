import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const placeDetail = props => {
  let modalContent = null;

  if (props.selectedPlace){
    modalContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }

  return(
    <Modal onRequestClose={props.onModalClosed} visible={!!props.selectedPlace} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View style={styles.buttonContainer}>
          <Button title="Delete" color="red" onPress={props.onItemDeleted}/>
          <Button title="Close" onPress={props.onModalClosed}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: 30,
    alignItems: "center",
    height: '100%'
  },

  buttonContainer: {
    // justifyContent: "flex-end",
    flexDirection: "row"
  },

  placeImage: {
    width: '100%',
    height: 200
  },

  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 24
  }
})


export default placeDetail;