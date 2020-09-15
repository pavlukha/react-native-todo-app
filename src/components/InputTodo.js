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
import {addTodo} from '../store/board/actions';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../styles/styles';

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
    if (this.state.input !== '') {
      console.log(props);

      this.props.addTodo(this.state.input, this.props.boardId);
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
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onBackdropPress={() =>
            this.setState({modalVisible: !this.state.modalVisible})
          }
          backgroundColor="rgba(0,0,0,0.7)">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                autoFocus
                style={styles.textInput}
                placeholder="Type here your todo"
                onChangeText={(e) => {
                  this.setState({input: e});
                }}
                value={this.state.input}
              />
              <View style={styles.buttonBlock}>
                <TouchableHighlight
                  style={styles.openButton}
                  onPress={() => {
                    this.submitTodo();
                    this.setState({modalVisible: !this.state.modalVisible});
                  }}>
                  <Icon name={'check'} color="#fff" size={20} />
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.openButton}
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
          style={styles.openButton}
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          <Icon name={'plus'} color="#fff" size={20} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 0,
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  buttonBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#64ac8f',
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 5,
    width: 39,
    padding: 10,
    elevation: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#c0dfc2',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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

const mapStateToProps = ({boards}) => ({
  boards: boards.boardItem,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (title) => dispatch(addTodo(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputTodos);
