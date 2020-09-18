import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const mainContainer = {
  flex: 1,
  padding: 20,
  backgroundColor: '#0d0d0d',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const colors = {
  strongCyan: '#00CC9B',
  veryDarkGrey: '#242424',
};

/* Текст в заголовках страниц + текст в boards и todo */
export const text = {
  textTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  textBoardTitle: {
    color: '#fff',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginBottom: 16,
    marginLeft: 5,
  },
  textTodoTitle: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  textFooter: {
    color: colors.strongCyan,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  textTodos: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    marginLeft: 18,
  },
};

/* Блок ввода логин/пароль */
export const textInput = {
  outterText: {
    color: '#fff',
    opacity: 0.5,
    fontSize: 12,
    marginTop: 18,
    marginBottom: 6,
  },
  innerText: {
    color: '#fff',
    opacity: 0.5,
    fontSize: 16,
    backgroundColor: colors.veryDarkGrey,
    borderRadius: 16,
    width: 343,
    height: 48,
  },
};

/* Блок кнопок "войти"/"создать аккаунт" */
export const loginButtonSignIn = {
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 16,
  backgroundColor: colors.strongCyan,
  width: 343,
  height: 48,
};

export const loginButtonAccount = {
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 8,
  borderRadius: 16,
  borderWidth: 1.5,
  borderColor: '#00BC70',
  width: 343,
  height: 48,
};

export const loginButtonSignInText = {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
};

export const loginButtonAccountText = {
  color: '#00BC70',
  fontSize: 16,
  fontWeight: 'bold',
};

/* Кнопка открытия модального окна */
export const modalOpenBtn = {
  backgroundColor: colors.strongCyan,
  height: 37,
  width: 34,
  borderRadius: 3,
  fontSize: 34,
};

/* Мадальное окно ввода названия доски или туду */
export const centeredView = {
  flex: 0,
  alignSelf: 'flex-end',
  marginTop: 5,
};

export const modalView = {
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
};

export const modalBtns = {
  backgroundColor: '#64ac8f',
  borderRadius: 5,
  marginLeft: 15,
  marginRight: 15,
  width: 39,
  padding: 11,
  elevation: 2,
};

export const buttonBlock = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const modalTextInput = {
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
};

/* Контейнер с досками */
export const board = {
  container: {
    marginTop: 28,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
  },
  item: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.veryDarkGrey,
    borderRadius: 16,
    height: 140,
    width: 160,
    margin: 8,
  },
};

/* Контейнер с тудушками */
export const todoStyle = {
  container: {
    height: 72,
    width: 343,
    backgroundColor: colors.veryDarkGrey,
    borderRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  checkBox: {
    height: 40,
    width: 60,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginLeft: 10,
  },
};

/* Подвал */
export const footer = {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: colors.veryDarkGrey,
  boxShadow: '0px 12px 16px rgba(0, 2, 13, 0.2)',
  borderRadius: 24,
  width: 343,
  height: 80,
};

export const innerFooter = {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 204, 155, 0.06)',
  borderRadius: 12,
  width: 162,
  height: 48,
};

/* Фото профиля */
export const profileImage = {
  backgroundColor: colors.veryDarkGrey,
  height: 213,
  width: width - 20,
  borderRadius: 16,
};

/* Модуль с камерой */
export const imageItem = {
  backgroundColor: colors.veryDarkGrey,
  height: 214,
  width: 343,
  borderRadius: 16,
  resizeMode: 'center',
};

export const itemViewImage = {
  alignItems: 'center',
  borderRadius: 8,
  marginTop: 10,
};
