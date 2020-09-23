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
} from '../styles/styles';
import {deleteBoard} from '../store/board/actions';

class DeleteBoard extends React.Component {
  state = {
    setModalVisible: false,
    modalVisible: false,
  };

  render() {
    return (
      <View style={centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.isOpen || false}
          onBackdropPress={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }
          backgroundColor="rgba(0,0,0,0.7)">
          <View style={centeredView}>
            <View style={modalView}>
              <Text>Хотите удалить доску?</Text>
              <View style={buttonBlock}>
                <TouchableOpacity
                  style={modalBtns}
                  onPress={() => {
                    this.deleteBoard(this.props.boardId);
                    // this.setState({modalVisible: !this.state.modalVisible});
                    this.props.close();
                  }}>
                  <Icon name={'check'} color="#fff" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={modalBtns}
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
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
