import React from 'react';
import {StyleSheet,SafeAreaView,View,Text, Image} from 'react-native'

export default ({Name,Description,ImageUrl})=>{
    return(
        <SafeAreaView style={styles.Container}>
            <Image
                style={styles.image}
                source={{uri:ImageUrl}}
            />
        <View style={styles.TextBox}>
            <Text style={{fontSize:17}}>{Name}</Text>
            <Text>{Description}</Text>
        </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#dcf7fa",
        borderRadius:5,
        marginBottom:10
    },
    TextBox:{
        width:'75%',
        alignItems:'flex-start',
        margin:1
    },
    image:{
        margin:5,
        width:75,
        height:75,
    }
});