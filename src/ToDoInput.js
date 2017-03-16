import React, { Component } from 'react';
import ToDo from './ToDo';
import { TextInput, Alert, Animated, Easing, Text, View, Button, ScrollView } from 'react-native';
import Styles from './styles/style';

class ToDoInput extends Component {
  constructor(props){
      super(props);
      this.state = {list : [], current : ""};
    }

    componentWillMount() {
      this.animatedValue = new Animated.Value(500);
    }

    componentDidMount() {
      Animated.timing(this.animatedValue, {
        toValue: 0,
        duration: 500
      }).start()
    }

  updateTodo = (e) => {
    e.preventDefault();
    let list = this.state.list;
    list.push(this.state.current);
    this.setState({list, current: ""});
  }

  delItem = (del) => {
    const name = this.state.list[del];
    Alert.alert(
      'Delete?',
      'Delete '+name+' from the to do list?',
      [
        {text: 'Cancel', onPress: () =>{
          console.log("cancelled");
        }},
        {text: 'OK', onPress: () =>{
          let list = this.state.list;
          list.splice(del, 1);
          this.setState({list});
        }},
      ]
    );
  }

  editItem = (index, newListItem) => {
    let list = this.state.list;
    list[index] = newListItem;
    this.setState({list});
  }

  render() {
    const animatedStyle = { padding: this.animatedValue }
    return (
      <Animated.View style={animatedStyle}>
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
      </Animated.View>
    );
  }
}

export default ToDoInput;
