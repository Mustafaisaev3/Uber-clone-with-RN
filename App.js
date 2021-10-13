/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import SelectedPlaceReducer from './store/reducers/SelectedPlaceReducer';

// Screens
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

// Navigator
const Stack = createStackNavigator()

// Redux
const reducers = combineReducers({
  selectedPlace: SelectedPlaceReducer
})
const store = createStore(reducers)


const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
          <Stack.Navigator>
            <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
            <Stack.Screen name={'MapScreen'} component={MapScreen}/>
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
