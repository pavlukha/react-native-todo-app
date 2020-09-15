import React from 'react';
import {connect} from 'react-redux';
import {
  Alert,
  View,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableHighlight,
} from 'react-native';
import Modal from 'react-native-modal';
import {addBoard} from '../store/board/actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  modalBtns,
  modalOpenBtn,
  centeredView,
  modalView,
} from '../styles/styles';

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
      Alert.alert('Sorry... Empty Title');
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
                style={styles.textInput}
                placeholder="Type your board's name"
                onChangeText={(e) => {
                  this.setState({input: e});
                }}
                value={this.state.input}
              />
              <View style={styles.buttonBlock}>
                <TouchableHighlight
                  style={modalBtns}
                  onPress={() => {
                    this.submitBoard();
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
                  <Icon name={'check'} color="#fff" size={20} />
                </TouchableHighlight>
                <TouchableHighlight
                  style={modalBtns}
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
                  <Icon name={'times'} color="#fff" size={20} />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          <AntDesign name={'plus'} color="#fff" style={modalOpenBtn} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonBlock: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  textInput: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    backgroundColor: '#e7f5dc',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addBoard: (title) => dispatch(addBoard(title)),
});

export default connect(null, mapDispatchToProps)(InputBoards);
