import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Imagem from '../../../componentes/imagem';


export default function NovaTarefa() {
    return (
        <KeyboardAvoidingView>
            <View style={styles.formulario}>
                <TextInput
                    style={styles.Input}
                    placeHolderTextColor="#999"
                    autoCorrect={true}
                    placeholder="Titulo da tarefa"
                    maxLength={25}
                />

                <TextInput
                    style={styles.Descricao}
                    placeHolderTextColor="#999"
                    autoCorrect={true}
                    placeholder="Descrição"
                    multiline={true}
                    numberOfLines={10}
                />
                <TouchableOpacity>
                    <Imagem />
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                    <Ionicons name="add" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    formulario: {
        width: '90%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        flexDirection: 'column',
        borderColor: "#eee",
        paddingTop: 20,
        paddingBottom: 20,
    },
    Input: {
        height: 40,
        backgroundColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },
    Descricao: {
        height: '40%',
        marginTop: 20,
        marginBottom: 0,
        backgroundColor: '#ccc',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee',
        textAlign: 'left',
        textAlignVertical: 'top',
    },
    botao: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#1c6cce',
        borderRadius: 4,
        paddingTop: 20,
        paddingBottom: 20,
    },
    Texto: {
        fontSize: 14,
        color: "#333",
        fontWeight: "bold",
        marginTop: 4,
        textAlign: 'center',
    },

});
