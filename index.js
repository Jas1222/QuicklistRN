import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import React, { Component } from 'react';
import { Browse } from './modules/browse/Browse.js';
import { Create } from './modules/create/Create.js';
import { Register } from './modules/registration/Register.js';
import { Colors } from './Constants/Colors';
import { Entypo } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

if (__DEV__) {
  activateKeepAwake();
}

const Tab = createBottomTabNavigator();

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
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = getImage(route.name)
              return <Entypo name={iconName} size={size} color={color} />
            }
          })}

          tabBarOptions={{
            activeTintColor: Colors.PRIMARY_DARK
          }}
        >
          <Tab.Screen name="Browse" component={Browse} />
          <Tab.Screen name="Create" component={Create} />
          <Tab.Screen name="Register" component={Register} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

registerRootComponent(App);
