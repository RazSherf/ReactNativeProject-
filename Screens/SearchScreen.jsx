import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import SearchBarComponent from './SearchBarComponent'
import yelp from '../api/yelp'


const SearchScreen = () => {
  const[term,setTerm] = useState('')
  const[results,setResults] = useState([]) 
  const[errorMessage,setErrorMessage] = useState('')

  const searchApi = async ()=>{
    try{
    const response = await yelp.get('/search',{
      params:{
          limit:50,
          term,
          location:'san jose'


      }
    })
    setResults(response.data.businesses)
  }catch (err){
     setErrorMessage('Something Went Wrong :(')
    }
  }

  const onTermChange = (term) =>{
    setTerm(term)
  }

  const onTermSubmit =()=>{
    searchApi()
  }
  
  return (
   <SafeAreaView>
    <View style={styles.container}>
     <SearchBarComponent term={term} onTermSubmit={onTermSubmit} onTermChange={onTermChange}/>
     <Text>Search Screen</Text>
     <Text>{term}</Text>
     <Text>WE have found {results.length} results</Text>
     <Text>{errorMessage}</Text>
    </View>
   </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column'
  }
    
})