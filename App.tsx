import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreenRouter from './app/Config/routes';

export default class AwesomeApp extends React.Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    // await Expo.Font.loadAsync({
    //   Roboto: require("native-base/Fonts/Roboto.ttf"),
    //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //   Ionicons: require("native-base/Fonts/Ionicons.ttf")
    // });
    this.setState({ isReady: true });
  }

  render() {
    console.log('sssss');

    // if (!this.state.isReady) {
    //   return <Loading />;
    // }
    return <HomeScreenRouter />;
  }
}
