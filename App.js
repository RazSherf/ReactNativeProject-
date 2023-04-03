import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import TestScreen from './Screens/TestScreen';
import SearchScreen from './Screens/SearchScreen';
import SearchComponent from './Screens/SearchScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <SearchScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'

  },
});
