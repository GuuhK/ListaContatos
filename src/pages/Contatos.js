import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotaoVoltar from '../components/BotaoVoltar'
import axios from 'axios';

const Contato = ({ route, navigation }) => {
    const [contatos, setContatos] = React.useState(null);
    const id = route.params.id;

    let url = `http://localhost:3000/contatos/${id}`;

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setContatos(response.data)
            })
            .catch((error) => {
                alert('Desculpe, deu errado.')
            });
    });

    if (!contatos) return null;

    return (
        <View style={estilos.container}>
            <View style={estilos.logo}>
                <Text style={estilos.titulo}>{ contatos.nome }</Text>
                <Text style={estilos.data}>{ contatos.numero }</Text>
            </View>

            <View style={estilos.botoes}>
                <BotaoVoltar titulo="Voltar" acao={ () => navigation.goBack() } />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    logo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    botoes: {
        flex: 2,
    },
    titulo: {
        fontSize: "2em",
        fontFamily: "Arial",
        color: "#ff1f00",
        fontWeight: "bold",
    },
});

export default Contato;