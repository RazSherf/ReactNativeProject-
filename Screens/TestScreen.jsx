import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const TestScreen = () => {
  return (
    <SafeAreaView>
        <View style={styles.container} > 
            <Text>1</Text>
        </View>
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:5,
        justifyContent:'center'
    }
})