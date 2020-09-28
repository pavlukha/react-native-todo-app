import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import InputBoards from '../components/Boards/InputBoard';
import Boards from '../components/Boards/Boards';
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
import DeleteBoard from '../components/Boards/DeleteBoard';

function HomeScreen({navigation}) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, prepareToDelete] = useState(null);

  return (
    <View style={mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={[text.textTitle, {marginRight: '65%'}]}>Доски</Text>
        <InputBoards />
      </View>
      <DeleteBoard
        boardId={id}
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
          prepareToDelete(null);
        }}
      />
      <ScrollView contentContainerStyle={board.container}>
        <Boards
          navigation={navigation}
          openDeleteModal={(id) => {
            setIsOpen(true);
            prepareToDelete(id);
          }}
        />
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
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Icon name={'id-card'} size={27} color={colors.silver} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name={'user-circle'} size={27} color={colors.silver} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;
