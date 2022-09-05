import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({restaurant}) => {
    const {image_url, name, categories, price, review_count, rating, location} = restaurant

    const formattedCategories = categories.map((item)=> item.title).join(' . ');
    console.log(location)
    const description = `${formattedCategories} ${price ? ' . ' + price :''} ⭐ ${rating} .  🉐${review_count}`
   const formattedLocation = `${location.address1}, ${location.city}, ${location.state}, ${location.zip_code}`

  return (
    <View >
       <RestaurantImage image_url={image_url}/>
       <View style={{paddingHorizontal:10, paddingVertical:15}}>
            <RestaurantTitle title={name}/>
            <RestaurantDescription description={description}/>
            <RestaurantLocation location={formattedLocation }/>
       </View>
      
    </View>
  )
}

const RestaurantImage = ({image_url}) => {
    return (
        <View>
            <Image source={{uri:image_url}} style={styles.imageUrl}/>
        </View>
    )
}

const RestaurantTitle = ({title}) => {
    return (
        <View>
           <Text style={{fontWeight:'bold'}}>{title}</Text>
        </View>
    )
}

const RestaurantDescription = ({description}) => {
    return (
        <View>
           <Text>{description}</Text>
        </View>
    )
}

const RestaurantLocation = ({location}) => {
    return (
        <View>
           <Text>{location}</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    imageUrl:{
        width:'100%',
       height:180
    }
})