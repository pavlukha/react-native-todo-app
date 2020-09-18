import React from 'react';
import {connect} from 'react-redux';
import {Alert, View, TextInput, Keyboard, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {addTodo} from '../../store/board/actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  modalOpenBtn,
  centeredView,
  buttonBlock,
  modalView,
  modalTextInput,
  modalBtns,
} from '../../styles/styles';

class InputTodos extends React.Component {
  constructor(props) {
    super();
    this.state = {
      input: '',
      setModalVisible: false,
      modalVisible: false,
    };
  }

  submitTodo = () => {
    console.log('id: ', this.props.boardId);
    if (this.state.input !== '') {
      this.props.addTodo(this.state.input, this.props.boardId);
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
                placeholder="Введите название задания"
                onChangeText={(e) => {
                  this.setState({input: e});
                }}
                value={this.state.input}
              />
              <View style={buttonBlock}>
                <TouchableOpacity
                  style={modalBtns}
                  onPress={() => {
                    this.submitTodo();
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

const mapStateToProps = ({boards}) => ({
  boards: boards.boardItem,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title, id) => dispatch(addTodo(title, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTodos);
