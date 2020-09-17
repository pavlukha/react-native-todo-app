import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {
  mainContainer,
  text,
  textInput,
  loginButtonSignIn,
  loginButtonAccount,
  loginButtonSignInText,
  loginButtonAccountText,
} from '../styles/styles';

function WelcomeScreen({navigation}) {
  return (
    <View style={mainContainer}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={text.textTitle}>Добро{'\n'}пожаловать</Text>
      </View>
      <View>
        <Text style={textInput.outterText}>Логин</Text>
        <TextInput
          placeholder="Введите логин"
          placeholderTextColor="#fff"
          style={textInput.innerText}
        />
        <Text style={textInput.outterText}>Пароль</Text>
        <TextInput
          secureTextEntry
          placeholderTextColor="#fff"
          placeholder="Введите пароль"
          style={textInput.innerText}
        />
        <Text style={{color: '#fff', alignSelf: 'flex-end', marginTop: 8}}>
          Забыли пароль?
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={loginButtonSignIn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={loginButtonSignInText}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={loginButtonAccount}>
          <Text style={loginButtonAccountText}>Создать аккаунт</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default WelcomeScreen;
