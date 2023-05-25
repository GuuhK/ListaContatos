import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Contato = ({ contatos, navigation }) => {
    return (
        <TouchableOpacity onPress={ () => navigation.navigate('Contatos', {id: contatos.id}) }>
            <View style={estilos.cartao}>
                <Text style={estilos.nome}>{ contatos.nome }</Text>
                <Text style={estilos.numero}>{ contatos.numero }</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        border: "1px solid #ff1f00",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        display: "flex",
        elevation: 2,
        boxShadow: "0px 2px 2px #ccc",
    },
    nome: {
        fontSize: "1.5em",
        fontFamily: "Arial",
        color: "#ff1f00",
        fontWeight: "bold",
    },
    numero: {
        fontSize: "1em",
        fontFamily: "Arial",
        color: "#ff1f00",
    }
});

export default Contato;