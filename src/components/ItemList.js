import React, {useState} from 'react';
import ListItem from './ListItem';

import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ItemList = ({items, deleteToDoItem}) => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteToDoItem={deleteToDoItem} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ItemList;
