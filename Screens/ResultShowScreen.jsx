import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import yelp from '../api/yelp'
const ResultShowScreen = ({navigation}) => {
  
  const[result,setResult] = useState(null)
  const id = navigation.getParam('id')

  // Getting the single result from the yelp API
  const getResult = async (id) =>{
    const response =  await yelp.get(`/${id}`)
    setResult(response.data)
  }

  // fetching the result when the component is render
  useEffect(()=>{
    getResult(id)
  },[])

  if(!result){
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title} >{result.name}</Text>
      <View style={styles.viewImg} >
      <FlatList
      data={result.photos}
      keyExtractor = {(photo)=>photo}
      renderItem = {({item})=>{
        return (
          <Image style={styles.image} source={{uri:item}}/>
        )
      }}
      />
      </View>
    </View>
  )
}

export default ResultShowScreen

const styles = StyleSheet.create({
  
  container:{
    display:'flex',
    flex:1,
    flexDirection:'column',
    gap:5,

  },

  viewImg:{
    display:'flex',
    flex:'1',
    marginTop:5,
    gap:5,
    justifyContent:'center',
    alignItems:'center'
  },
  
  image:{
    height:150,
    width:300,
    gap:5
    
  },

  title:{
    textAlign:'center',
    fontSize:18,
    fontWeight:800,
    fontFamily: 'Al Nile',
    marginTop:5,
    
  }
  
})