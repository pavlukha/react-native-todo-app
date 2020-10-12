import React, {useState} from 'react';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import {
  mainContainer,
  text,
  innerFooter,
  footer,
  colors,
  todoStyle,
} from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CameraPicker from '../components/Camera/CameraPicker';

function ProfileScreen({navigation}) {

const [isCameraPickerOpen, toggleCameraPicker] = useState(false);

if (isCameraPickerOpen) {
  return <CameraPicker
            close={() => toggleCameraPicker(false)}
            navigation={navigation}
          />
}

  return (
    <SafeAreaView style={mainContainer}>
      <View style={mainContainer}>
        <View>
        <ImageBackground
          source={require('../../assets/onboarding1.png')}
          style={{height: 300, width: 300}}
          imageStyle={{borderRadius: 15}}
         />
        <TouchableOpacity
          style={[todoStyle.container, {justifyContent: 'space-between'}]}
          onPress={() => {toggleCameraPicker(true)}}
          >
          <Text style={[text.textTodoTitle, {marginLeft: 20}]}>
            Сменить фото профиля
          </Text>
          <Icon
            name={'camera-retro'}
            color={colors.strongCyan}
            size={27}
            style={{marginHorizontal: 20}}
          />
        </TouchableOpacity>
        </View>
        
        <TouchableOpacity
          style={[todoStyle.container, {justifyContent: 'space-between'}]}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={[text.textTodoTitle, {marginLeft: 20}]}>Настройки</Text>
          <Icon
            name={'cog'}
            size={27}
            color={colors.strongCyan}
            style={{marginHorizontal: 20}}
          />
        </TouchableOpacity>

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
            <AntDesign name={'appstore-o'} size={27} color={colors.silver} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
            <Icon name={'id-card'} size={27} color={colors.silver} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
