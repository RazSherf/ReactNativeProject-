import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import ResultDetail from './ResultDetail'

const ResultsList = ({title,results}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.titleStyle}>{title}</Text>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
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
  container:{
    marginBottom:10,
    marginLeft:15,
    marginTop:5

  },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Arial',
        marginLeft:15,
        marginBottom:5,
    }
})