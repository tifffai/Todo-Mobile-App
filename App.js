import React from 'react';
import { Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      todoInput: '',
      todos: [
        { id: 0, title: 'Buy grocery', done: false },
        { id: 1, title: 'Wash dishes', done: true }
      ]
    }
  }

  addNewTodo () {
    // console.log(this.state.todoInput);
    // console.log("Test 1")
    let todos = this.state.todos;
    
    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });
    
    this.setState({
      todos,
      todoInput: ''
    });
    // console.log("Test 2")
    // console.log(this.state)
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
          todoInput={this.state.todoInput}
        />
        
        <FlatList 
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ ({item, index}) => {
            return (
              <TodoItem todoItem={item}/>
            )
          }}
        />

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
