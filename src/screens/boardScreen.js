import {CheckBox} from 'react-native-elements';
import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {SwipeListView} from 'react-native-swipe-list-view';
import InputTodo from '../components/Input/InputTodo';
import {
  colors,
  mainContainer,
  text,
  footer,
  innerFooter,
  todoStyle,
} from '../styles/styles';
import {toggleTodo} from '../store/board/actions';

function BoardScreen({route, navigation, boards, toggleTodo}) {
  const {boardId, boardTitle} = route.params;
  const arr = boards.filter((el) => el.id === boardId);

  const renderItem = (data) => {
    console.log(data);
    return (
      <TouchableOpacity>
        <View style={todoStyle.container}>
          <CheckBox
            checkedIcon="check"
            uncheckedIcon="square-o"
            size={35}
            checkedColor={colors.strongCyan}
            checked={todoIsDone}
            onPress={() => toggleTodo(boardId, todoId)}
          />
          <Text style={text.textTodos}>{todoTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHiddenItem = () => {
    return <View />;
  };

  return (
    <View style={mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[text.textTitle, {marginRight: '65%'}]}>{boardTitle}</Text>
        <InputTodo boardId={boardId} />
      </View>

      <ScrollView contentContainerStyle={{marginTop: 10}}>
        {arr[0].todos.map((todo) => (
          <SwipeListView
            // data={listData}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            style={{backgroundColor: 'pink'}}
          />
        ))}
      </ScrollView>

      <View style={footer}>
        <View style={innerFooter}>
          <Icon
            name={'user-circle'}
            size={27}
            color={colors.strongCyan}
            style={{marginHorizontal: 20}}
          />
          <Text style={text.textFooter}>Список дел</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name={'appstore-o'} size={27} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name={'user-circle'} size={27} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (boardId, todoId) => dispatch(toggleTodo(boardId, todoId)),
});

const mapStateToProps = ({boards}) => ({
  boards: boards.boardItem,
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardScreen);
