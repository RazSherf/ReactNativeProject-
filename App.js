import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import TestScreen from './Screens/TestScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <TestScreen/>
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
