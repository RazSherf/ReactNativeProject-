import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import ResultShowScreen from "./Screens/ResultShowScreen";


const navigator = createStackNavigator({
  Search : SearchScreen,
  Home:HomeScreen,
  ResultShow:ResultShowScreen,

},{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Search Screen For Restaurants'
  }
})

export default createAppContainer(navigator)