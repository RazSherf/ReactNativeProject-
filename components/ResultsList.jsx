import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import ResultDetail from './ResultDetail'

const ResultsList = ({title,results}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    <FlatList
    horizontal
    data={results}
    keyExtractor={(result)=>result.id}
    renderItem={({item})=>{
        return <Text><ResultDetail result={item}/></Text>
    }}
    />
    </View>
  )
}

export default ResultsList

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Arial',
        marginLeft:15
    }
})