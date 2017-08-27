import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    TouchableOpacity,
    // RefreshControl
} from 'react-native';

const DATA_LIST = [
    {nome: "Allan"},
    {nome: "Fonceca"},
    {nome: "Golf "}
]
class ListScreen extends Component {
    onItemPress = (item) => {
        alert(item.nome)
    }
    renderItem = (record) => {

        const {item, index} = record;
        
        return(
            <TouchableOpacity onPress={()=>this.onItemPress(item)}>    
            <View style={{
                backgroundColor:'#FFFFFF',
                marginHorizontal:16,
                marginVertical:8,
                padding:16,
                borderRadius:8,
                elevation:2,
                shadowOffset:{
                    width:2,
                    height:3
                },
                shadowColor:'#555555'
                

            }}>
                <Text style={{textAlign:'center'}}>
                    {item.nome}
                </Text>
            </View>
            </TouchableOpacity>  
        )
    }


 
    render(){
        return(
            <FlatList
                data={DATA_LIST}
                renderItem = {this.renderItem}  
                keyExtractor= {(item)=>item.nome} 
               
            />

        )
    }
}


export default ListScreen; 