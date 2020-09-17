import React from 'react';
import {View, Text} from 'react-native';
import {
  mainContainer,
  text,
  innerFooter,
  footer,
  colors,
  profileImage,
} from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CameraImage from '../components/Camera';

function ProfileScreen({navigation}) {
  return (
    <View style={mainContainer}>
      <View style={profileImage}>
        <CameraImage />
      </View>

      <View style={footer}>
        <View style={innerFooter}>
          <Icon
            name={'user-circle'}
            size={27}
            color={colors.strongCyan}
            style={{marginHorizontal: 20}}
          />
          <Text style={text.textFooter}>Профиль</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name={'appstore-o'} size={27} color={'#fff'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Icon name={'id-card'} size={27} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfileScreen;
