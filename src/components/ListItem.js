import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteToDoItem}) => {
  return (
    <TouchableOpacity key={item._id} style={styles.container}>
      <Text style={styles.text}>{item.Text}</Text>
      <Icon
        name="remove"
        style={styles.btn}
        size={20}
        color="firebrick"
        onPress={() => deleteToDoItem(item._id)}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee',
    margin: 2,
  },
  text: {
    padding: 9,
  },
  btn: {
    backgroundColor: '#eee',
    padding: 9,
    margin: 3,
  },
});

export default ListItem;
