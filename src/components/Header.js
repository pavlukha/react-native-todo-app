import React from 'react';
import {connect} from 'react-redux';
import {Text, StyleSheet} from 'react-native';

function HeaderTitle(props) {
  const {boardId, boardTitle} = props.params;
  console.log(boardTitle);
  return <Text style={styles.headerTitle}>{boardTitle}</Text>;
}
const mapStateToProps = ({boards}) => ({
  boards: boards.boardItem,
});

const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default connect(mapStateToProps, null)(HeaderTitle);
