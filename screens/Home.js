import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Tab from '../components/Tab'
import Header from '../components/Home/Header'
import SearchBar from '../components/Home/SearchBar'
import Categories from '../components/Home/Categories'
import { getRestaurantsAction } from '../redux/actions/ResturantAction'

const Home = ({navigate, route}) => {
  const dispatch = useDispatch()
  const [city, setCity] = useState('San Francisco')

  //connect to the store
  const restaurantData = useSelector((state)=> state.restaurantData)

  const {loading, success, error, restaurants} = restaurantData

  // console.log(restaurants)
  useEffect(()=> {
      dispatch(getRestaurantsAction(city))
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
          <Header />
          {loading && <View><Text>Loading...</Text></View> }
          <SearchBar />
      </View>
    <Categories />
      <Tab />
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  container:{
      flex:1
  },
  headerSection:{
      padding:20,
      backgroundColor:'white'
  }
})