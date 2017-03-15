import React from 'react';
import ToDoInput from "./src/ToDoInput"
import Styles from './src/styles/style';
import { View, StatusBar } from 'react-native';

const App = () => {
    return (
      <View style={Styles.container}>
        <StatusBar hidden />
        <ToDoInput />
      </View>
    );
}

export default App;
