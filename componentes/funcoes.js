import { Keyboard, Alert } from 'react-native';

const funcoes = {
    adicionar: function (lista, novaTarefa) {

        if (novaTarefa == '') {
            return lista;
        }

        const search = lista.filter(lista => lista == novaTarefa);

        if (search.length != 0) {
            Alert.alert("Atenção", "Essa tarefa já existe!");
            return lista;
        }

        lista.push(novaTarefa)
        return lista, Keyboard.dismiss();
    },
    mostrar: function (novaT){
        return novaT;
    },
    
}
export default funcoes;