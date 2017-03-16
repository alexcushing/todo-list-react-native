import React, { Component } from 'react';
import { Animated, Easing, TextInput, Text, View, TouchableHighlight } from 'react-native';
import Styles from './styles/style';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class ToDo extends Component {
  constructor(props){
      super(props);
    }

    componentWillMount() {
      this.animatedValue = new Animated.Value(0);
      this.changeSize = new Animated.Value(0);
      this.changeSizeOpp = new Animated.Value(0);
    }

    componentDidMount() {
      Animated.timing(this.animatedValue, {
        toValue: 50,
        duration: 75
      }).start()
    }

  rightAnimate = () => {
    Animated.timing(this.changeSize, {
        toValue: 300,
        duration: 75
      }).start();
      setTimeout(() => {
        this.props.delItem(this.props.del);
        Animated.timing(this.changeSize, {
        toValue: 0,
        duration: 75
      }).start();
    }, 80);
  }

  leftAnimate = () => {
    Animated.timing(this.changeSizeOpp, {
          toValue: 300,
          duration: 75
        }).start();
    setTimeout(() => {
        this.props.delItem(this.props.del);
        Animated.timing(this.changeSizeOpp, {
          toValue: 0,
          duration: 75
        }).start();
    }, 80);
  }

  sendPress = () => {
    this.props.delItem(this.props.del);
  }

  sendEdit = (event) => {
    this.props.editItem(this.props.del, event);
  }

  render() {
    const animatedStyle = { height: this.animatedValue }
    const changedSize = { paddingLeft: this.changeSize }
    const changedSizeOpp = { paddingRight: this.changeSizeOpp }
    return (
      <GestureRecognizer
        onSwipeRight={this.rightAnimate}
        onSwipeLeft={this.leftAnimate}
        >
        <Animated.View style={[Styles.item, animatedStyle, changedSize, changedSizeOpp]}>
          <TextInput 
            style={Styles.inputEdit}
            onChangeText={this.sendEdit}
          >
            {this.props.todo}
          </TextInput>
          <TouchableHighlight 
            underlayColor='#ECEFF1' 
            onPress={this.sendPress}
          >
            <Text style={Styles.deleteButton}>x</Text>
          </TouchableHighlight>
        </Animated.View>
        </GestureRecognizer>
    );
  }
}


export default ToDo;
