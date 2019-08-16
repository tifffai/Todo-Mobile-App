import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Buy grocery', done: false },
        { id: 1, title: 'Wash dishes', done: true },
      ]
    }
  }

  addNewTodo () {
    // console.log(this.state.todoInput);
    console.log("Test 1")
    let todos = this.state.todos;
    
    todos.unshift({
      id: todos.length + 1,
      todo: this.state.todoInput,
      done: false
    });
    
    this.setState({
      todos,
      todoInput: ''
    });
    console.log("Test 2")
  }

  render() {
    const statusbar = (Platform.OS == 'ios') ? <View style={styles.statusbar}></View> : <View></View>

    return (
      <View style={styles.container}>
        {statusbar}

        <Header title="To-do App"/>

        <InputBar 
          textChange={todoInput => this.setState({ todoInput })}
          addNewTodo={ () => this.addNewTodo() }
        />

        <Text>{this.state.todoInput}</Text>
        
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
