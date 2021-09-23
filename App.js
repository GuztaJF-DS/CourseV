import React,{useState,useEffect} from 'react';
import {
  View, 
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Button
} from 'react-native';
import List from './src/List';
import Data from './src/data.json';

export default()=>{
  const [orderedData,setOrderedData]=useState(false);
  const [orderBool,setOrderBool]=useState(false);
    
  useEffect(()=>{
      if(orderedData==false){
        setOrderedData(Data.sort((a,b)=>a.Name.localeCompare(b.Name)));
        setOrderBool(false)
      }else if(orderedData==true){
        setOrderedData(Data.sort((a,b)=>b.Name.localeCompare(a.Name)))
        setOrderBool(true);
      }
  },[orderedData])


  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.Header}>
          <Text style={{fontSize:18}}>Cursos</Text>
      </View>
      <Button
        color="#93c3c7"
        title="Mudar a Ordem alfabética"
        onPress={()=>{(orderBool==false)?setOrderedData(true):setOrderedData(false)}}
      />
      <FlatList
        data={orderedData}
        renderItem={({item})=>(
          <List Name={item.Name} Description={item.Description} ImageUrl={item.ImageUrl}></List>
        )}
      />
    </SafeAreaView>
  );
}
  

const styles = StyleSheet.create({
  backgroundStyle: {
    flex:1,
    padding:5
  },
  Header:{
    borderRadius:5,
    padding:2,
    alignItems:"center",
    backgroundColor:"#c2eef2",
    marginBottom:10
  }
});