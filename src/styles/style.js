import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
    marginBottom: 20,
  },
  item : {
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#ECEFF1',
    flex: 1,
  },
  input : {
    padding: 3,
  },
  inputEdit : {
      flex: 1,
    padding: 3,
  },
  deleteButton : {
      fontFamily: 'sans-serif-thin',
      color: 'red',
      fontSize: 22,
      margin: 5,
      marginRight: 10,
  },
  count: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  toDoArea : {
    backgroundColor: '#ECEFF1',
    marginBottom: 20,
  },
});

export default Styles;