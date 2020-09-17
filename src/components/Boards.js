import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addBoard} from '../store/board/actions';
import {colors, board, text} from '../styles/styles';

class Boards extends React.Component {
  render() {
    return this.props.boards.map((boardItem, ind) => {
      return (
        <TouchableOpacity
          key={ind}
          onPress={() => {
            this.props.navigation.navigate('Tasks', {
              boardId: boardItem.id,
              boardTitle: boardItem.title,
            });
          }}
          style={board.item}>
          <Text style={text.textBoardTitle}>{boardItem.title}</Text>
          <Icon
            name={boardItem.icon}
            size={27}
            color={colors.strongCyan}
            style={{alignSelf: 'flex-start', marginTop: 16}}
          />
        </TouchableOpacity>
      );
    });
  }
}

const mapStateToProps = (state) => ({
  boards: state.boards.boardItem,
});

const mapDispatchToProps = (dispatch) => ({
  addBoard: (title) => dispatch(addBoard(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
