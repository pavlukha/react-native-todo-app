import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {addBoard} from '../store/board/actions';

class Boards extends React.Component {
  render() {
    return this.props.boards.map((boardItem, ind) => {
      return (
        <TouchableOpacity
          style={styles.board}
          key={ind}
          onPress={() => {
            this.props.navigation.navigate('Tasks', {
              boardId: boardItem.id,
              boardTitle: boardItem.title,
            });
          }}>
          <Text style={styles.text}>{boardItem.title}</Text>
        </TouchableOpacity>
      );
    });
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#30444E',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#1F2E35',
    padding: 20,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: '#c0dfc2',
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  boards: state.boards.boardItem,
});

const mapDispatchToProps = (dispatch) => ({
  addBoard: (title) => dispatch(addBoard(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
