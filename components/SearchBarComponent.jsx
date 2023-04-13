import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import {Feather} from '@expo/vector-icons' 
import { TextInput } from 'react-native-gesture-handler'

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
   <SafeAreaView>
    <View style={styles.background}>
        <Feather style={styles.icon} name='search' size={30}/>
        <TextInput style={styles.inputStyle} 
        placeholder='Enter Search Word'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
   </SafeAreaView>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#E0E0E0',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
    },
    inputStyle:{
        flex:1,
       fontSize:18
    },
    icon:{
        fontSize:25,
        alignSelf:'center',
        marginHorizontal:15

    }
})