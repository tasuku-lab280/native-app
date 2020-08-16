import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        {!!props.imageUrl && (
          <Image style={styles.imageSize} source={{uri: props.imageUrl}} />
        )}
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {props.title}
        </Text>
        <Text style={styles.subText}>{props.author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  imageSize: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ListItem;
