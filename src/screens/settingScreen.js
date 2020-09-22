import React from 'react';
import {View, Text} from 'react-native';
import {
  mainContainer,
  text,
  colors,
  footer,
  innerFooter,
} from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SettingScreen({navigation}) {
  return (
    <View style={mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <Text style={text.textTitle}>Настройки</Text>
      </View>

      <Icon
        name={'tools'}
        size={75}
        color={colors.silver}
        style={{marginHorizontal: 20}}
      />

      <View style={footer}>
        <View style={innerFooter}>
          <Icon
            name={'cog'}
            size={27}
            color={colors.strongCyan}
            style={{marginHorizontal: 20}}
          />
          <Text style={text.textFooter}>Настройки</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name={'appstore-o'} size={27} color={colors.silver} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name={'user-circle'} size={27} color={colors.silver} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SettingScreen;
