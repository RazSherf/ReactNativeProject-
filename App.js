import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';


const navigator = createStackNavigator({
  Search : SearchScreen,
  Home:HomeScreen,

},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Search Screen For Restaurants'
  }
})

export default createAppContainer(navigator)