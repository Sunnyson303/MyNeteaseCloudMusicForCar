import React from 'react';
import { Root} from 'native-base';
import {AppLoading, Font} from "expo";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from './screens/home'
import Friends from './screens/friends'
import Message from './screens/message'
import SideBar from './screens/sidebar'
import Skin from './screens/skin'
import Setting from './screens/setting'

class App extends React.Component {
  state = {
    loading: true
  }
  async componentWillMount() {
    try {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
      });
      this.setState({ loading: false });
    } catch (error) {
      console.log('error for load font ');
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <AppNavigator />
      </Root>
    );
  }
}

class HomeScreen extends React.Component {
  componentDidMount() {
    console.log(123);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
  
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  }
}, {
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);