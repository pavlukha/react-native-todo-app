import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import InputTodo from '../components/InputTodo';
import {colors, gs} from '../styles/styles';

function TaskScreen({route, boards}) {
  const {boardId, boardTitle} = route.params;
  const arr = boards.filter((el) => el.id === boardId);
  return (
    <View style={styles.container}>
      <InputTodo />
      <Text style={{fontSize: 20, color: 'white'}}>CheckedBoard</Text>
      <Button title="To Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
  },
});

const mapStateToProps = ({boards}) => ({
  boards: boards.boardItem,
});

export default connect(mapStateToProps, null)(TaskScreen);
