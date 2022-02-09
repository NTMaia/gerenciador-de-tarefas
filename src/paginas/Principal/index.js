import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import ImagemTarefa from '../../../componentes/imagem';
import Funcoes from '../../../componentes/funcoes'



export default function Principal() {

    const [tarefa, setTarefa] = useState(['Limpar a casa', 'Varrer o quintal', 'Ler um livro']);
    const [novaTarefa, setNovaTarefa] = useState('');

    async function removerTarefa(item) {

        Alert.alert("Deletar Tarefa", "Tem certeza que deseja remover está tarefa?", [
            {
                text: "Cancelar",
                onPress: () => {
                    return;
                },
                style: 'cancelar'
            },
            {
                text: "OK",
                onPress: () => setTarefa(tarefa.filter(tarefas => tarefas != item))
            }
        ],
            { cancelable: false }
        );

    }

    return (
        <>
            <StatusBar style="auto" />
            <KeyboardAvoidingView
                keyboardVerticalOffset={0}
                behavior="padding"
                style={{ flex: 1 }}
                enabled={Platform.OS === 'ios'}
            >
                <View style={styles.conteudo}>
                    <View style={styles.corpo}>
                        <FlatList
                            style={styles.FlatList}
                            data={tarefa}
                            keyExtractor={item => item.toString()}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.ConteudoVer}>
                                    <Text style={styles.Texto}>{item}</Text>

                                    <TouchableOpacity onPress={() => removerTarefa(item)}>
                                        <MaterialIcons
                                            name="delete-forever"
                                            size={25}
                                            color="#f64c75"
                                        />
                                    </TouchableOpacity>

                                    {/* <ImagemTarefa /> */}

                                </View>
                            )}
                        />
                    </View>

                    <View style={styles.formulario}>
                        <TextInput
                            style={styles.Input}
                            placeHolderTextColor="#999"
                            autoCorrect={true}
                            placeholder="Adicionar uma tarefa"
                            maxLength={25}
                            onChangeText={text => setNovaTarefa(text)}
                            value={novaTarefa}
                        />
                        <TouchableOpacity
                            style={styles.Button}
                            onPress={() => setNovaTarefa(Funcoes.adicionar(tarefa, novaTarefa))}
                        >
                            <Ionicons name="add" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingTop: 35,
        paddingBottom: 10,

    },
    corpo: {
        flex: 1,
    },
    formulario: {
        padding: 0,
        height: 60,
        justifyContent: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingTop: 13,
        borderTopWidth: 1,
        borderColor: "#eee",

    },
    Input: {
        flex: 1,
        height: 40,
        backgroundColor: '#eee',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },
    Button: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c6cce',
        borderRadius: 4,
        marginLeft: 10,
    },
    FlatList: {
        flex: 1,
        marginTop: 5,
    },
    ConteudoVer: {
        marginBottom: 15,
        padding: 15,
        borderRadius: 4,
        backgroundColor: "#eee",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: "#eee",
        flexWrap: 'wrap'
    },
    Texto: {
        fontSize: 14,
        color: "#333",
        fontWeight: "bold",
        marginTop: 4,
        textAlign: 'center',
    },

});
