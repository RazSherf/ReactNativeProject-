import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, {useState,useEffect} from 'react'
import SearchBarComponent from './SearchBarComponent'
import ResultsList from '../components/ResultsList'
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
          location:'new york',


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
  useEffect(()=>{
    searchApi('pizza')

  },[])

  const filterResultsByPrice = (price) =>{
    // result can be: $ || $$ | $$$
    return results.filter(result=>{
      return result.price === price
    })
  }

  return (
   <SafeAreaView>
    <View style={styles.container}>
     <SearchBarComponent term={term} onTermSubmit={onTermSubmit} onTermChange={onTermChange}/>
     {errorMessage ? <Text> {errorMessage} </Text> :null}
     <ResultsList results ={filterResultsByPrice('$')} title="Cost Effective"/>
     <ResultsList results ={filterResultsByPrice('$$')} title="Bit Pricer"/>
     <ResultsList results ={filterResultsByPrice('$$$')} title="Big Spender"/>
     
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