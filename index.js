import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Browse } from './modules/browse/Browse.js';
import { Register } from './modules/registration/Register';
import { Colors } from './Constants/Colors';
import { Entypo } from '@expo/vector-icons';
import { CreateDetailsScreen } from './modules/create/screens/CreateDetailsScreen';
import { CreateFiltersScreen } from './modules/create/screens/CreateFiltersScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

if (__DEV__) {
  activateKeepAwake();
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const getImage = (component) => {
  let iconName
  if (component === 'Browse') {
    iconName = "open-book"
  } else if (component === 'Create') {
    iconName = "pencil"
  } else if (component === 'Register') {
    iconName = "key"
  }
  return iconName
}

const CreateStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.PRIMARY,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen
        name="CreateStep1"
        component={CreateDetailsScreen}
      />
      <Stack.Screen
        name="CreateStep2"
        component={CreateFiltersScreen}
      />
    </Stack.Navigator>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <NavigationContainer
      >
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              const iconName = getImage(route.name)
              return <Entypo name={iconName} size={size} color={color} />
            }
          })}

          tabBarOptions={{
            activeTintColor: Colors.PRIMARY_DARK
          }}
        >
          <Tab.Screen name="Browse" component={Browse} />
          <Tab.Screen name="Create" component={CreateStack} />
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

registerRootComponent(App);
