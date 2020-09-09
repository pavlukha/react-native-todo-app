import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HeaderTitle from '../components/Header';
import HomeScreen from '../screens/homeScreen';
import TaskScreen from '../screens/taskScreen';
import TodoScreen from '../screens/todoScreen';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Boards',
            headerStyle: {
              backgroundColor: '#1F2E35',
            },
            headerTintColor: '#e7f5dc',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Tasks"
          component={TaskScreen}
          options={({route}) => ({
            headerTitle: (props) => <HeaderTitle {...props} {...route} />,
            headerStyle: {
              backgroundColor: '#1F2E35',
            },
            headerTintColor: '#e7f5dc',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{
            title: '${todo.title}',
            headerStyle: {
              backgroundColor: '#1F2E35',
            },
            headerTintColor: '#e7f5dc',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
