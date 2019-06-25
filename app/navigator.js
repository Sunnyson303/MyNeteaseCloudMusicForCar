import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
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