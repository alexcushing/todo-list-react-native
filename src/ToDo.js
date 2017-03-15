import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import Styles from './styles/style';

class ToDo extends Component {
  constructor(props){
      super(props);
    }

  sendPress = () => {
    this.props.delItem(this.props.del);
  }

  render() {
    return (
        <View style={Styles.item}>
          <TextInput style={Styles.input}>{this.props.todo}</TextInput>
          <Button onPress={this.sendPress} title="x" />
        </View>
    );
  }
}


export default ToDo;
