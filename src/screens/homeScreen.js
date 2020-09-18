import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import InputBoards from '../components/Input/InputBoard';
import Boards from '../components/Boards';
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

function HomeScreen({navigation}) {
  return (
    <View style={mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[text.textTitle, {marginRight: '65%'}]}>Доски</Text>
        <InputBoards />
      </View>

      <ScrollView contentContainerStyle={board.container}>
        <Boards navigation={navigation} />
      </ScrollView>

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
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Icon name={'id-card'} size={27} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name={'user-circle'} size={27} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
