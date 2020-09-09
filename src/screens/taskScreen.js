import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import CheckBoard from '../components/CheckBoard';

function TaskScreen({route, navigation, boards}) {
  const {boardId, boardTitle} = route.params;
  const arr = boards.filter((el) => el.id === boardId);
  return (
    <View style={styles.container}>
      <CheckBoard />
      <Text style={{fontSize: 20, color: 'white'}}>
        IdOfCheckedBoard: {arr[0].id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#30444E',
  },
});

const mapStateToProps = ({boards}) => ({
  boards: boards.boardItem,
});

export default connect(mapStateToProps, null)(TaskScreen);
