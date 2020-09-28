import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  modalBtns,
  centeredView,
  modalView,
  buttonBlock,
} from '../../styles/styles';
import {deleteBoard} from '../../store/board/actions';

class DeleteBoard extends React.Component {
  render() {
    return (
      <View style={centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.isOpen || false}
          onBackdropPress={this.props.close}
          backgroundColor="rgba(0,0,0,0.7)">
          <View style={centeredView}>
            <View style={modalView}>
              <Text>Хотите удалить доску?</Text>
              <View style={[buttonBlock, {marginTop: 15}]}>
                <TouchableOpacity
                  style={modalBtns}
                  onPress={() => {
                    this.props.deleteBoard(this.props.boardId);
                    this.props.close();
                  }}>
                  <Icon name={'check'} color="#fff" size={20} />
                </TouchableOpacity>
                <TouchableOpacity style={modalBtns} onPress={this.props.close}>
                  <Icon name={'times'} color="#fff" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
});

export default connect(null, mapDispatchToProps)(DeleteBoard);
