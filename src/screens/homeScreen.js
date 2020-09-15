import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import InputBoards from '../components/InputBoard';
// import Boards from '../components/Boards';
import {
  mainContainer,
  board,
  text,
  colors,
  footer,
  innerFooter,
} from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

function HomeScreen({navigation, props}) {
  return (
    <View style={mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[text.textTitle, {marginRight: '65%'}]}>Доски</Text>
        <InputBoards />
      </View>
      <View style={board.container}>
        <View style={board.item}>
          <Text style={text.textBoardTitle}>Дом</Text>
          <Icon name={'home'} size={27} color={colors.strongCyan} />
        </View>
        <View style={board.item}>
          <Text style={text.textBoardTitle}>Работа</Text>
          <Icon name={'clipboard-list'} size={27} color={colors.strongCyan} />
        </View>
        <View style={board.item}>
          <Text style={text.textBoardTitle}>Шоппинг</Text>
          <Icon name={'shopping-cart'} size={27} color={colors.strongCyan} />
        </View>
        <View style={board.item}>
          <Text style={text.textBoardTitle}>Спорт</Text>
          <Icon name={'basketball-ball'} size={27} color={colors.strongCyan} />
        </View>
      </View>

      <View style={footer}>
        <View style={innerFooter}>
          <AntDesign
            name={'appstore-o'}
            size={27}
            color={colors.strongCyan}
            style={{marginHorizontal: 20}}
          />
          <Text style={text.textFooter}>Доски</Text>
        </View>
        <Icon name={'clipboard-check'} size={27} color={'#fff'} />
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name={'user-circle'} size={27} color={'#fff'} />
        </TouchableOpacity>
      </View>

      {/* <ScrollView><Boards navigation={props.navigation} /></ScrollView> */}
      {/* <Button
        title="To Welcome"
        onPress={() => navigation.navigate('Welcome')}
      /> */}
    </View>
  );
}

export default HomeScreen;
