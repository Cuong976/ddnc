import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Index2 from '../index2';
import IndexComponent from '../index';

const Stack = createStackNavigator();

export default function IndexNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IndexComponent" screenOptions={{headerShown: false}}>
        <Stack.Screen name="IndexComponent" component={IndexComponent} />
        <Stack.Screen name="Index2" component={Index2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
