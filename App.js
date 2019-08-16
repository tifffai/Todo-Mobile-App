import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, task: 'Buy grocery', done: false },
        { id: 1, task: 'Wash dishes', done: true },
      ]
    }
  }


  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="Hello, World!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  statusbar: {
    backgroundColor: '#FFCE00',
    height: 30,
  }
});
