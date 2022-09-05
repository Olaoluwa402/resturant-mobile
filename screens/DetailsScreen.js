import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../components/Detail/About';
import Divider from '../components/Divider';

const DetailsScreen = ({route}) => {
    const {restaurant} = route.params;

    console.log('from detail',restaurant)
  return (
    <View>
       <About restaurant={restaurant}/>
       <Divider />
       {/* <MenuItems /> */}
       {/* Cart */}
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({})