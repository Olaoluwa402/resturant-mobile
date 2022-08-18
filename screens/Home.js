import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Tab from '../components/Tab'
import Header from '../components/Home/Header'
import SearchBar from '../components/Home/SearchBar'

const Home = () => {
  return (
    <View>
      <View style={styles.headerSection}>
          <Header />
          <SearchBar />
      </View>

      <Tab />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  headerSection:{
      padding:20,
      backgroundColor:'white'
  }
})