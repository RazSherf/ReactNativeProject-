import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ResultDetail = ({result}) => {
  return (
    <View style={styles.container}>
        <Image  style={styles.image}source={{uri: result.image_url}} />
        <Text style={styles.name} >{result.name} </Text>
        <Text>{result.rating} Starts ★ {result.review_count} Reviews</Text>
    </View>
  )
}

export default ResultDetail

const styles = StyleSheet.create({
    
    container:{
        marginLeft:15
    },

    image:{
        width:250,
        height:120,
        borderRadius:5,
        marginBottom:5,
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
    }
})