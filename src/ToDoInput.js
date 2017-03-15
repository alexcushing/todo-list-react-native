import React, { Component } from 'react';
import ToDo from './ToDo';
import { StyleSheet, TextInput, Text, View, Button, ScrollView } from 'react-native';

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


  render() {
    return (
      <View>
        <Text>To Do List</Text>
          <TextInput 
            onChangeText={(value) => this.setState({ current : value })}
            value={this.state.current}
          />
          <Button title="Submit" onPress={this.updateTodo} />
          <ScrollView>
        {
         this.state.list.map((todo, index) => {
             return (
                 <ToDo key={index} del={index} todo={todo} delItem={this.delItem} />
             );
         })
    }
    </ScrollView>
      </View>
    );
  }
}

export default ToDoInput;
