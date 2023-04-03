import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React,{useState} from 'react'
import SearchComponent from './SearchScreen'
const TestScreen = () => {

  return (
    <SafeAreaView>
        <View style={styles.container} > 
            <SearchComponent/>
            <Text>Testing</Text>
        </View>
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        gap:5,
        justifyContent:'center'
    }
})