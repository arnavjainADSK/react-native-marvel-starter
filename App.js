import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import marvelApp from './app/reducers'
import { StackNavigator } from 'react-navigation';

import HomeContainer from "./app/containers/Home";
import SearchContainer from "./app/containers/Search";

let store = createStore(marvelApp, applyMiddleware(thunk))

const RootStack = StackNavigator(
  {
    SearchResults: {
      screen: HomeContainer,
    },
    Search: {
      screen: SearchContainer
    }
  },
  {
    initialRouteName: 'Search',
  }
);

export default class App extends Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
