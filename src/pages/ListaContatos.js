import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import BotaoVoltar from '../components/BotaoVoltar';

import Contato from '../components/Contato';

const ListaContatos = ({navigation}) => {
    const [contatos, setContatos] = React.useState(null);

    let url = "http://localhost:3000/contatos/";

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setContatos(response.data);
            })
            .catch((error) => {
                alert('Desculpe, deu errado.');
            })
    }, []);

    if (!contatos) return null;

    const listaContatos = contatos.map( contatos =>
        <Contato key={contatos.id} contatos={contatos} navigation={navigation} />
    );

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Meus Contatos</Text>

            <View style={estilos.contatos}>
                {listaContatos}
            </View>
            <View>
            <BotaoVoltar titulo="Voltar" acao={() => navigation.goBack()}/>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    titulo: {
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#1E90FF",
        fontWeight: "bold",
        textAlign: "center",
    },
    contatos: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
        padding: 10,
    }
});

export default ListaContatos;