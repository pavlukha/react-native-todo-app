import React from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  mainContainer,
  width,
  heightScreen,
  loginButtonAccount,
  loginButtonSignIn,
  loginButtonSignInText,
  loginButtonAccountText,
  textInput,
  text,
} from '../../styles/styles';

export const PageOne = (props) => {
  return (
    <View style={mainContainer}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../../assets/onboarding1.png')}
          style={{width: width, height: heightScreen - 100}}
        />
      </View>
      <TouchableOpacity style={loginButtonSignIn} onPress={props.setStep}>
        <Text style={loginButtonSignInText}>Продолжить</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PageTwo = (props) => {
  return (
    <View style={mainContainer}>
      <Text style={text.textTitle}>Добро пожаловать в STDA</Text>
      <View style={{flex: 1, marginBottom: 50}}>
        <Image
          source={require('../../../assets/onboarding1.png')}
          style={{width: width, height: heightScreen - 100}}
        />
      </View>
      <TouchableOpacity style={loginButtonSignIn} onPress={props.setStepEmail}>
        <Text style={loginButtonSignInText}>Продолжить через Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={loginButtonAccount}
        onPress={props.setStepAccount}>
        <Text style={loginButtonAccountText}>Создать аккаунт</Text>
      </TouchableOpacity>
      <Text style={[text.textPolicy, {marginTop: 16}]}>
        Условия использования и Политика конфиденциальности{'\n'}должны быть
        приняты, если вы продолжаете вход.
      </Text>
    </View>
  );
};

export const PageThree = (props) => {
  return (
    <View style={mainContainer}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={text.textTitle}>Ваш Email</Text>
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
        <TouchableOpacity onPress={props.setStepForgot}>
          <Text style={{color: '#fff', alignSelf: 'flex-end', marginTop: 8}}>
            Забыли пароль?
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={loginButtonSignIn}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={loginButtonSignInText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const PageFour = (props) => {
  return (
    <View style={mainContainer}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={text.textTitle}>Создать аккаунт</Text>
      </View>
      <View>
        <Text style={textInput.outterText}>Email</Text>
        <TextInput
          placeholder="Введите ваш email"
          placeholderTextColor="#fff"
          style={textInput.innerText}
        />
      </View>
      <TouchableOpacity style={loginButtonSignIn} onPress={props.setStep}>
        <Text style={loginButtonSignInText}>Продолжить через Email</Text>
      </TouchableOpacity>
    </View>
  );
};

export const PageFive = (props) => {
  return (
    <View style={mainContainer}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={text.textTitle}>Регистрация</Text>
      </View>
      <View>
        <Text style={textInput.outterText}>Ваше имя</Text>
        <TextInput
          placeholder="Введите ваше имя"
          placeholderTextColor="#fff"
          style={textInput.innerText}
        />
        <Text style={textInput.outterText}>Пароль</Text>
        <TextInput
          placeholder="Введите минимум 8 символов"
          placeholderTextColor="#fff"
          style={textInput.innerText}
        />
      </View>
      <View>
        <TouchableOpacity
          style={loginButtonSignIn}
          onPress={() => {
            props.setStep;
            props.navigation.navigate('Home');
          }}>
          <Text style={loginButtonSignInText}>Регистрация</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const PageSix = (props) => {
  return (
    <View style={mainContainer}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={text.textTitle}>Забыли пароль?</Text>
      </View>
      <Text style={{color: '#fff', alignSelf: 'flex-end', marginTop: 8}}>
        Чтобы задать новый пароль, введите email-адрес своего аккаунта
      </Text>
      <View>
        <Text style={textInput.outterText}>Ваш электронный адрес:</Text>
        <TextInput
          placeholder="Введите электронный адрес"
          placeholderTextColor="#fff"
          style={textInput.innerText}
        />
      </View>
      <View>
        <TouchableOpacity style={loginButtonSignIn} onPress={props.setStep}>
          <Text style={loginButtonSignInText}>Далее</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={loginButtonAccount}
          onPress={props.setStepSignIn}>
          <Text style={loginButtonAccountText}>Войти в систему</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const PageSeven = (props) => {
  return (
    <View style={mainContainer}>
      <View style={{alignSelf: 'flex-start'}}>
        <Text style={text.textTitle}>Сброс пароля</Text>
      </View>
      <Text style={{color: '#fff', alignSelf: 'flex-end', marginTop: 8}}>
        Пожалуйста, введите новый пароль
      </Text>
      <View>
        <Text style={textInput.outterText}>Новый пароль</Text>
        <TextInput
          placeholder="Напиши минимум 8 символов"
          placeholderTextColor="#fff"
          style={textInput.innerText}
        />
        <Text style={textInput.outterText}>Повторите новый пароль</Text>
        <TextInput
          secureTextEntry
          placeholderTextColor="#fff"
          placeholder="Напиши минимум 8 символов"
          style={textInput.innerText}
        />
      </View>
      <View>
        <TouchableOpacity
          style={loginButtonSignIn}
          onPress={() => {
            props.setStep;
            props.navigation.navigate('Home');
          }}>
          <Text style={loginButtonSignInText}>Сбросить пароль</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={loginButtonAccount}
          onPress={props.setStepSignIn}>
          <Text style={loginButtonAccountText}>Войти в систему</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
