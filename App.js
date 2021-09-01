import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';
import List from './src/List';
import Data from './src/data.json';

export default()=>{
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <View style={styles.Header}>
          <Text style={{fontSize:18}}>Cursos</Text>
      </View>
      <FlatList
        data={Data}
        renderItem={({item})=>(
          <List Name={item.Name} Description={item.Description} ImageUrl={item.ImageUrl}></List>
          )}
        keyExtractor={item => item.id}
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