import React from 'react';
import { StyleSheet, Alert, Image, View, TouchableOpacity } from 'react-native';
import * as imagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'




export default function Imagem() {

    let [imagemSelecionada, setImagemSelecionada] = React.useState(null);


    let adicionarImagem = async () => {

        let verificarPermissao = await imagePicker.requestCameraPermissionsAsync();

        if (!verificarPermissao) {
            Alert.alert("Atenção", 'O aplicativo não tem permissão para acessar a camêra.');
            return;
        }

        let abrirBliblioteca = await imagePicker.launchImageLibraryAsync();

        if (abrirBliblioteca.cancelled) {
            return;
        }

        setImagemSelecionada({ localUri: abrirBliblioteca.uri });

    };

    if (imagemSelecionada !== null) {
        return (
            <View style={estilos.conteudo}>
                {/* <TouchableOpacity
                    style={estilos.botao}
                    onPress={adicionarImagem}>
                    <Ionicons name="image-outline" size={24} color="white" />
                </TouchableOpacity> */}
                <Image style={estilos.imagem} source={{ uri: imagemSelecionada.localUri }} />
            </View>
        )
    } else {
        return (
            <View >
                <TouchableOpacity
                    style={estilos.botao}
                    onPress={adicionarImagem}>
                    <Ionicons name="image-outline" size={24} color="white" />
                </TouchableOpacity>

                {/* <Image style={estilos.imagem} source={{ uri: 'https://img.icons8.com/cotton/2x/image--v2.png' }} /> */}
            </View >
        )
    }
}



const estilos = StyleSheet.create({
    conteudo: {
        width: '100%',
        borderColor: '#FFF',
        marginTop: 15,
        marginLeft: 7,
    },
    imagem: {
        width: 300,
        height: 300,
    },
    botao: {
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#1c6cce',
        borderRadius: 4,
        paddingTop: 20,
        marginTop: 10,
        paddingBottom: 20,
    },
})