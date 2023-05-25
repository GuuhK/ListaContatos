import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Botao';

const Inicio = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.inicio}>
                <Text style={estilos.titulo}>Meus Contatos '-'</Text>
            </View>
            <View style={estilos.botoes}>
                <Botao titulo="Novo Contato" acao={ () => navigation.navigate('NovoContato') }></Botao>
                <Botao titulo="Lista de Contatos" acao={ () => navigation.navigate('ListaContatos') }></Botao>
            </View>
        </View>
    );
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    inicio:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    botoes:{
        flex: 2,
    },
    titulo: {
        fontSize: "3em",
        fontFamily: "Comic Sans MS",
        color: "#1E90FF",
        fontWeight: "bold",
    },
})
export default Inicio;