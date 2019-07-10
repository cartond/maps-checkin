import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
    return (
        <FlatList
          style={styles.listContainer}
          data={props.places}
          renderItem={(place) => (
            <ListItem
              key={place.item.key}
              placeName={place.item.name}
              placeImage={place.item.image}
              onItemPressed={() => props.onItemSelected(place.item.key)}
            />
          )}
        >
        </FlatList>
    );
};

const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;