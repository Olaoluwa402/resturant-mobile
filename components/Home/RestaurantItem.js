import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const RestaurantItem = ({restaurants}) => {
  return (
    <ScrollView>
        {
             restaurants.map((restaurant)=> (
                <View style={styles.restaurantItem} key={restaurant.id}>
                    <RestaurantImage image={restaurant.image_url}/>
                    <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
                </View>
            ))
        }
    </ScrollView>
  )
}

const RestaurantImage = ({image})=> {
    return (
        <View style={styles.restaurantImageContainer}>
            <Image source={{uri:image}} resizeMode='cover' style={styles.restaurantImage}/>
        </View>
    )
}

const RestaurantInfo = ({name, rating})=> {
    return (
        <View style={styles.restaurantInfo}>
            <Text style={{fontSize:15}}>{name}</Text>
            <Text>{rating}</Text>
        </View>
    )
}

export default RestaurantItem

const styles = StyleSheet.create({
    restaurantItem:{},
    restaurantImageContainer:{width:'100%'},
    restaurantImage:{width:'100%', height:180},
    restaurantInfo:{flexDirection:'row', padding:5, justifyContent:'space-between', alignItems:'center'}
    
})