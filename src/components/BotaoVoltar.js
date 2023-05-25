import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BotaoVoltar = ({ titulo, acao }) => {
    return (
        <TouchableOpacity style={estilos.botao} onPress={acao}>
            <Text style={estilos.texto}>{ titulo }</Text>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#FF6347",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000",
        margin: 7,
    },
    texto: {
        color: "#000",
        fontFamily: "Comic Sans MS",
        fontSize: "1.5em",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default BotaoVoltar;