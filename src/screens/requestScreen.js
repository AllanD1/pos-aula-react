import React, { Component } from 'react';
import {
    Button,
    View,
    Text,
    ActivityIndicator,
    ScrollView

    // RefreshControl
} from 'react-native';

import axios from 'axios';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

class RequestScreen extends Component {

    state = {
        erro:'',
        posts:null,
        aguarde: false
    }
    onBuscarPress = () =>{
      this.setState({aguarde : true})
        let posts = null;
        let erro = '';
      axios.get(POST_URL)
      .then((response) =>{

            if(response.status===200){

                posts = response.data
                
            }else{
                erro = 'Nao foi possivel completar a operacao';
            }
          }).catch((exeption) =>{

            erro = 'Nao foi possivel completar a operacao';

          }).finally(()=>{
            this.setState({

                aguarde: false, posts: posts, erro: erro
            })
          })
    }
    renderFrom = () =>{
        return(
            <Button title="Buscar" onPress={this.onBuscarPress}/>

        )
    }
    renderContent = () =>{
        if(this.state.aguarde){
            return(

                <ActivityIndicator size="large" color="#0A6060"/>
            )
        }

        if(this.state.erro){
            return (
                <Text style={{color:'#0A6060'}}>
                    {this.state.erro}
                </Text>
            )
        }

        let content;
        if(this.state.posts){
            
            content = this.state.posts.map((item,index)=>{
                
                    return (
                        <View key={index} style={{padding:16}}>
                            <Text style={{color:'#0A6060', fontWeight:"bold"}}>
                                {item.title}
                            </Text>
                            <Text>
                                {item.body}
                            </Text>
                        </View>
                    )
            })

        }

        return(
            <View>
                {content}
            </View>
        )
       
    }

    render(){
        return(

            <ScrollView>

                    {this.renderFrom()}
                    {this.renderContent()}

            </ScrollView>
        )
    }

}
export default RequestScreen; 