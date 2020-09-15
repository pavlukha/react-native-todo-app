import React from 'react';
import {connect} from 'react-redux';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addBoard} from '../store/board/actions';
import {colors} from '../styles/styles';

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
          <View style={{flexDirection: 'row'}}>
            <Icon name={'th-list'} color="#fff" size={20} style={styles.icon} />
            <Text style={styles.text}>{boardItem.title}</Text>
          </View>
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
    justifyContent: 'flex-start',
    backgroundColor: '#64ac8f',
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
    color: '#000',
    fontSize: 20,
  },
  icon: {
    marginRight: 20,
  },
});

const mapStateToProps = (state) => ({
  boards: state.boards.boardItem,
});

const mapDispatchToProps = (dispatch) => ({
  addBoard: (title) => dispatch(addBoard(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Boards);
