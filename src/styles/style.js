import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
  },
  item : {
    margin: 10,
    flexDirection: 'row',
    flex: 5,
  },
  input : {
    padding: 3,
  },
  inputEdit : {
      flex: 1,
    padding: 3,
  },
  deleteButton : {
      color: 'red',
      fontSize: 25,
      margin: 5,
  },
  count: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  toDoArea : {
      backgroundColor: '#FFF3E0',
      marginLeft: 3,
      marginRight: 3,
  },
});

export default Styles;