import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import SearchBarComponent from './SearchBarComponent'


const SearchScreen = () => {
  const[term,setTerm] = useState('')

  const onTermChange = (term) =>{
    setTerm(term)
  }
  
  return (
   <SafeAreaView>
    <View style={styles.container}>
     <SearchBarComponent term={term} onTermSubmit={()=> console.log('Term was submit')} onTermChange={onTermChange}/>
     <Text>Search Screen</Text>
     <Text>{term}</Text>
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