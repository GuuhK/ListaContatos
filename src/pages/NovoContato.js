import React, {useState} from 'react';
import { View, Text, TextInput,  StyleSheet } from 'react-native';
import Botao from '../components/Botao';
import BotaoVoltar from '../components/BotaoVoltar';
import axios from 'axios';

const NovoContato = ({ navigation }) => {
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");

    const salvar = () => {
        
        let url = "http://localhost:3000/contatos";

        let dados = {
            nome: nome,
            numero: numero
        };

        axios
            .post(url, dados)
            .then((response) => {
                let id = response.data.id;
                navigation.navigate('Contatos', {id: id})
            })
            .catch((error) => {
                alert('Desculpe, deu errado.');
            });
    }
    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Adicionar novo contato</Text>

            <TextInput style={estilos.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setNome}
            />

            <TextInput style={estilos.input}
                placeholder="Número"
                value={numero}
                onChangeText={setNumero}
            />

            <Botao titulo="Salvar" acao={salvar}/>
            <BotaoVoltar titulo="Voltar" acao={() => navigation.goBack()}/>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 20,

    },
    titulo: {
        fontSize: "2em",
        fontFamily: "Comic Sans MS",
        color: "#1E90FF",
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    input:{
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 10,
        backgroundColor: "#fff"
    },

});

export default NovoContato;