import React from 'react';
import {connect} from 'react-redux';
import {Alert, View, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {addBoard} from '../../store/board/actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  modalBtns,
  modalOpenBtn,
  centeredView,
  modalView,
  buttonBlock,
  modalTextInput,
} from '../../styles/styles';

class InputBoards extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: '',
      setModalVisible: false,
      modalVisible: false,
    };
  }

  submitBoard = () => {
    if (this.state.input !== '') {
      this.props.addBoard(this.state.input);
      this.setState({
        input: '',
      });
      Keyboard.dismiss();
    } else {
      Alert.alert('Необходимо ввести текст');
    }
  };

  render() {
    return (
      <View style={centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onBackdropPress={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }
          backgroundColor="rgba(0,0,0,0.7)">
          <View style={centeredView}>
            <View style={modalView}>
              <TextInput
                autoFocus
                autoCapitalize="sentences"
                style={modalTextInput}
                placeholder="Введите название доски"
                onChangeText={(e) => {
                  this.setState({input: e});
                }}
                value={this.state.input}
              />
              <View style={buttonBlock}>
                <TouchableOpacity
                  style={modalBtns}
                  onPress={() => {
                    this.submitBoard();
                    this.setState({modalVisible: !this.state.modalVisible});
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
        <TouchableOpacity
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          <AntDesign name={'plus'} color="#fff" style={modalOpenBtn} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addBoard: (title) => dispatch(addBoard(title)),
});

export default connect(null, mapDispatchToProps)(InputBoards);
