/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import codePush from "react-native-code-push";

let codePushOptions = {updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE};

export default class TestMobileAzure extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Phan M Duong
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


TestMobileAzure = codePush(codePushOptions)(TestMobileAzure);

AppRegistry.registerComponent('TestMobileAzure', () => TestMobileAzure);
