import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import About from '../components/Detail/About';
import MenuItems from '../components/Detail/MenuItems';
import Divider from '../components/Divider';
import CartItems from '../components/Detail/CartItems';

const DetailsScreen = ({route}) => {
    const {restaurant} = route.params;

    console.log('from detail',restaurant)
  return (
    <View style={styles.container}>
       <About restaurant={restaurant}/>
       <Divider />
       <ScrollView>
          <MenuItems restaurantName={restaurant.name}/>
       </ScrollView>
       <CartItems />
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})