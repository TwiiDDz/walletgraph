/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';


export default class App extends Component {
  render() {
    return(
      <Provider store={Store} >
        <Root>
          <Router />
        </Root>
      </Provider>
    )
  } 
}