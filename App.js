import React from 'react';
import ToDoInput from "./src/ToDoInput"
import Styles from './src/styles/style';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const App = () => {
    return (
      <View style={Styles.container}>
        <ToDoInput />
      </View>
    );
}

export default App;
