import React, { Component } from 'react';
import { TextInput, Text, View, TouchableHighlight } from 'react-native';
import Styles from './styles/style';

class ToDo extends Component {
  constructor(props){
      super(props);
    }

  sendPress = () => {
    this.props.delItem(this.props.del);
  }

  sendEdit = (event) => {
    this.props.editItem(this.props.del, event);
  }

  render() {
    return (
        <View style={Styles.item}>
          <TextInput 
            style={Styles.inputEdit}
            onChangeText={this.sendEdit}
          >
            {this.props.todo}
          </TextInput>
          <TouchableHighlight onPress={this.sendPress}>
            <Text style={Styles.deleteButton}>x</Text>
          </TouchableHighlight>
        </View>
    );
  }
}


export default ToDo;
