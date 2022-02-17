import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () =>{
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style= {styles.toptext}> Top left </Text>
        </View>
      </View>
    </View>
   
  )
}
export default App

const styles = StyleSheet.create({
  
  container: {
    flex : 1 ,   
    backgroundColor : '#e3fdfe',   
  },  
  toptext :{
    fontSize : 20,
    color : '#549dbb',
    fontWeight : 'bold'
  },
  top : {    
    marginTop : 80 , 
    marginHorizontal : 40,
    backgroundColor : 'white' ,
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderWidth : 2,
    borderColor : 'pink'
  },   
  center : {  
    flex : 1,  
    marginTop : 80 , 
    marginHorizontal : 40,
    backgroundColor : 'white' ,
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderWidth : 2,
    borderColor : 'pink'
  },   

  bottom : {   
    flex : 1, 
    marginTop : 80 , 
    marginHorizontal : 40,
    backgroundColor : 'white' ,
    paddingHorizontal : 20,
    paddingVertical : 10,
    borderWidth : 2,
    borderColor : 'pink'
  },   
});
