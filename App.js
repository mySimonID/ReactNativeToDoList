/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import DBServer from './src/db/dbServer';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AddItem from './src/components/AddItem';
import ItemList from './src/components/ItemList';

// import {v4 as uuidv4} from 'uuid';

var dbServer = new DBServer();

class App extends Component {
  //   const[items, setItems] = useState([
  //     { _id: uuidv4(), text: 'Shoes'},
  // { _id: uuidv4(), text: 'Milk' },
  // { _id: uuidv4(), text: 'Eggs' },
  // { _id: uuidv4(), text: 'Bread' },
  // { _id: uuidv4(), text: 'bills' },
  //   ]);
  constructor() {
    super();
    this.state = {
      todolist: [{_id: '000', Text: 'Shoes'}],
    };
  }

  componentDidMount() {
    this.getData();
  }

  addItem = todo => {
    console.log('App.addItem: ' + todo);
    const newToDo = {
      Text: todo,
    };

    if (todo) {
      var promise = dbServer.add(newToDo);
      promise
        .then(response => {
          this.getData();
        })
        .catch(error => {
          console.log('Error:' + error.message);
        });
    }
  };

  deleteToDoItem = itemid => {
    //
    console.log('deleteToDoItem', itemid);
    //
    Alert.alert(
      'Delete',
      'Delete ToDo Item?',
      [
        {
          text: 'Delete',
          onPress: () => {
            var promise = dbServer.delete(itemid);
            promise
              .then(response => {
                this.getData();
              })
              .catch(error => {
                console.log('Error:' + error.message);
              });
          },
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  updateToDoItem = todo => {
    console.log('updateToDoItem', todo);

    if (todo) {
      var promise = dbServer.update(todo);
      promise
        .then(response => {
          this.getData();
        })
        .catch(error => {
          console.log('Error:' + error.message);
        });
    }
  };

  getData = () => {
    console.log('Getting Data');

    var promise = dbServer.getData();
    promise
      .then(response => {
        this.setState({
          todolist: response.data,
          currentToDo: {_id: '000', Text: '-'},
        });
      })
      .catch(error => {
        console.log('Error:App.getData' + error);
      });
  };

  makeCurrent = itemid => {
    console.log('makeCurrent', itemid);

    var promise = dbServer.getToDo(itemid);
    promise
      .then(response => {
        console.log('makeCurrent2', response.data);

        this.setState({
          currentToDo: response.data ? response.data : {_id: '', Text: ''},
        });
      })
      .catch(error => {
        console.log('Error:' + error.message);
      });
  };

  cancelToDoUpdate = () => {
    console.log('cancelToDoUpdate');
    this.setState({currentToDo: {_id: '000', Text: ''}});
  };

  render() {
    return (
      <View style={styles.sectionContainer}>
        <AddItem addItem={this.addItem} />
        <ItemList
          items={this.state.todolist}
          deleteToDoItem={this.deleteToDoItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

module.exports = App;
