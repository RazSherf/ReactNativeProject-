import React from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail'

const ResultsList = ({title,results,navigation}) => {
  if(!results.length){
    return null;
  }
  return (
    <View style={styles.container} >
      <Text style={styles.titleStyle}>{title}</Text>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={results}
    keyExtractor={(result)=>result.id}
    renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={()=> navigation.navigate('ResultShow',{id:item.id}) }>
            <ResultDetail result={item}/>
          </TouchableOpacity>
        )
    }}
    />
    </View>
  )
}

export default withNavigation(ResultsList)

const styles = StyleSheet.create({
  container:{
    marginBottom:10,
    marginLeft:0,
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