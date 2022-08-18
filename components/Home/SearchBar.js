import { StyleSheet, Text, View } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

const SearchBar = () => { 
  return (
    <View>
        <GooglePlacesAutocomplete 
        placeholder='Search'
        renderLeftButton={()=> (
            <View style={{marginRight:10}}><Ionicons name='location-sharp' size={24}/></View>
        )}
        styles={{
            textInputContainer: {
            backgroundColor: 'grey',
        },
        textInput: {
            height: 38,
            color: '#fff',
            fontSize: 16,
            backgroundColor: 'grey',
            borderRadius:30
          },
        }}
        />
    </View>
  )
}

const Icon = ({name,size})=> {
      return (
        <View style={{padding:10}}><Ionicons name={name} size={size}/></View>
      )
}

export default SearchBar

const styles = StyleSheet.create({})