import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderTitle from '../components/Header';
import HomeScreen from '../screens/homeScreen';
import TaskScreen from '../screens/taskScreen';
import TodoScreen from '../screens/todoScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import ProfileScreen from '../screens/profileScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Tasks"
          component={TaskScreen}
          options={({route}) => ({
            headerTitle: (props) => <HeaderTitle {...props} {...route} />,
          })}
        />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
