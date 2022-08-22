import { StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import React, {StrictMode} from 'react'
import Home from './screens/Home'
import Categories from './screens/Categories'
import Order from './screens/Order'
import Delivery from './screens/Delivery'
import Search from './screens/Search'
import Account from './screens/Account'



//initiate store

const Navigation = () => {
    const Stack = createNativeStackNavigator()

    const screenOptions = {
      headerTintColor:'white',
      headerStyle:{backgroundColor:'green'},
      contentStyle:{backgroundColor:'#eee'}
    }
  return (
    //provide store to app
        <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Stack.Screen name='home' component={Home} options={{
                headerShown:false
            }}/>
          <Stack.Screen name='categories' component={Categories} options={{title:'Our categories',  headerShown:false}}/>
          <Stack.Screen name='delivery' component={Delivery} options={{
            title:'Your Deliveries',
            }}/>
          <Stack.Screen name='order' component={Order}/>
          <Stack.Screen name='account' component={Account} />
          <Stack.Screen name='search' component={Search}/>
        </Stack.Navigator>
      </NavigationContainer>

  )
}

export default Navigation

const styles = StyleSheet.create({})