import React, { Component } from 'react';
import ToDo from './ToDo';
import { TextInput, Text, View, Button, ScrollView } from 'react-native';
import Styles from './styles/style';

class ToDoInput extends Component {
  constructor(props){
      super(props);
      this.state = {list : [], current : ""};
    }

  updateTodo = (e) => {
    e.preventDefault();
    let list = this.state.list;
    list.push(this.state.current);
    this.setState({list, current: ""});
  }

  delItem = (del) => {
    let list = this.state.list;
    list.splice(del, 1);
    this.setState({list});
  }

  editItem = (index, newState) => {
    let list = this.state.list;
    list[index] = newState;
    this.setState({list});
  }

  render() {
    return (
      <View>
        <Text style={Styles.count} >{this.state.list.length}</Text>
        <Text>To Do List</Text>
          <TextInput 
            style={Styles.input}
            onChangeText={(value) => this.setState({ current : value })}
            value={this.state.current}
          />
        <Button title="+ Add Item" onPress={this.updateTodo} />
        <ScrollView style={Styles.toDoArea} >
          {
          this.state.list.map((todo, index) => {
            return (
              <ToDo 
                key={index} 
                del={index} 
                todo={todo} 
                delItem={this.delItem} 
                editItem={this.editItem} 
              />
            );
          })
          }
        </ScrollView>
      </View>
    );
  }
}

export default ToDoInput;
