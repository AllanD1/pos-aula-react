import React, { Component } from 'react';
import {
    Button,
    View,
    Text,
    TextInput,

    // RefreshControl
} from 'react-native';


class FormScreen extends Component{
    onEntrarPress = () =>{
        const {login,senha} = this.state
        alert(login+" "+senha)
    }
    onChangeLogin = (text) => {
        const state = {
            login: text
        }

        this.setState(state)
    }

    onChangeSenha = (senha) => {
        this.setState({senha})
    }

    state = {}
    render(){

        return(

            <View>
            <TextInput
            value={this.state.login}
            onChangeText = {this.onChangeLogin}
            keyboardType = "email-address"
            />

            <TextInput
            value={this.state.senha}
            onChangeText = {this.onChangeSenha}
            secureTextEntry ={true}
            returnKeyType="go"
            onSubmitEditing = {this.onEntrarPress}
            />   
            
            <Button title="Entrar" onPress={this.onEntrarPress}/>   
        </View>
        )
    }
}

export default FormScreen;