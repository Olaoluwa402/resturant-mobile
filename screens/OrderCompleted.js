import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native'
import MenuItems from '../components/Detail/MenuItems'
// import firebaseApp from '../../firebaase'
import {getFirestore, collection, getDocs} from "firebase/firestore";

const OrderCompleted = () => {
    const [state, setState] =useState([])
    const [loading, setLoading] = useState(false)
    const {items, restaurantName} = useSelector((state)=> state.cartItems.selectedItems)
    const total = items
        .map((item)=> Number(item.price.replace('$', '')))
        .reduce((acc, current)=> acc + current,0)
    
   const totalUSD = `$${total.toFixed(2)}`

//    useEffect(() => { 
//         getOrdersFromFireBase() 
//    }, [])

   const getOrdersFromFireBase = async()=>{
    const db = getFirestore(firebaseApp);
    const usersCollection = collection(db, 'users')
    try {
        setLoading(true)
        const querySnapshot = await getDocs(usersCollection );
        setState(querySnapshot)
        console.log('querySnapshot', querySnapshot)
      } catch (e) {
        console.error("Error adding document: ", e);
        setLoading(false)
    }

}

  return (
    <SafeAreaView style={styles.container}>
        {/* green mark */}
        <LottieView 
            styles={styles.checkMark} 
            source={require('../assets/animations/check-mark-success-animation.json')}
            autoPlay
            speed={0.5}
            loop={false}
            />
      <Text>Your order at has been placed for </Text>
      {items && <MenuItems  foods={items} hideCheckBox={true}/>}
       
      {/* cooking animation */}
      <LottieView 
            styles={styles.checkMark} 
            source={require('../assets/animations/prepare-food.json')}
            autoPlay
            speed={0.5}
            loop={true}
            />
    </SafeAreaView>
  )
}

export default OrderCompleted

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    checkMark:{
        height:100,
        marginBottom:30,
        alignSelf:'center'
    }
})