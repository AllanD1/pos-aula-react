import React, { Component } from 'react';
import {
    View,
    AppRegistry,
    Text,
    Modal,
    Button
} from 'react-native';

import ImageTouch from './components/ImageTouch';
import ListScreen from './screens/listScreen';
import FromScreen from './screens/formScreen';
import RequestScreen from './screens/requestScreen';

class App extends Component {

    state = {
        exibirModal: false
    }
    renderModal = () =>{
        return(

            <View>

            <Button title="Abrir Modal" onPress= {() => this.setState({exibirModal:true})}/>


            <Modal visible = {this.state.exibirModal} onRequestClose={() => this.setState({exibirModal:false})} >

                <Text>
                    deu bom
                </Text>

                <Button title="Fecha Modal" onPress= {() => this.setState({exibirModal:false})}/>
            </Modal>
        </View>
        )
    }
    render() {
        return (
            <View   style={{backgroundColor:'#ededed',flex:1}} >

                {/* <Text>App é o meu componente principal.</Text>

                <ImageTouch url="https://www.appcoda.com/wp-content/uploads/2015/04/react-native.png" />
                <ImageTouch url="https://blog.algolia.com/wp-content/uploads/2015/12/react-native.png" />
                <ImageTouch url="http://i.imgur.com/oudmGva.png" /> */}

                    {/* <ListScreen/> */}

                    {/* <FromScreen/> */}
                    {/* {this.renderModal()} */}

                    <RequestScreen/>

            </View>
        )
    }
}

AppRegistry.registerComponent('PrimeiroProjeto', () => App);
