import { StyleSheet, Image, View, TextInput} from 'react-native'
import React from 'react'
const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/reuseme.png")} />
      <TextInput style={styles.input}
      placeholder="Search for..."
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    backgroundColor: '#c9e265'
  },
  input:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    width: '90%'
  }
})