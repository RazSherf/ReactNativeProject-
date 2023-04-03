import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.container} > 
          <Text>Hello1</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        gap:5,
        justifyContent:'center',
        flexDirection:'row',
    }
})