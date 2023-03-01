import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import MyTabs from "./navigation"
import SettingStackScreen from './navigation/SettingStackScreen';
import { DrawerScreen } from './screens';

const Drawer = createDrawerNavigator()

import CategoryService from './services/category';
import store from './store';

export default function App(props) {

  console.log(CategoryService.getCategory())
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='MyTabs'
          screenOptions={{
            headerShown: false
          }}
          drawerContent={(props) => <DrawerScreen {...props} />}
        >
          <Drawer.Screen name='MyTabs' component={MyTabs} />
          <Drawer.Screen name='Setting' component={SettingStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  )
}