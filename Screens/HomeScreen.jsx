import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.container} > 
            <Text>Hello World</Text>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        justifyContent:'center',

    }
})