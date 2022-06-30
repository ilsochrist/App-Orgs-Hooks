import React, {useMemo, useReducer} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native'



import Estrelas from '../../../componentes/Estrelas';

const distanciaEmMetros =  (distancia) => {
    console.log('distanciaEmMetros');
    return `${distancia}m`
}

export default function Produtor({nome, imagem, distancia, estrelas}) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false
    );

    const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);

    return <TouchableOpacity 
    style={estilo.cartao}
    onPress={inverterSelecionado}
    >
        <Image source={imagem} style={estilo.imagem} accessibilityLabel={nome} />
        <View style={estilo.informacoes}>
            <View>
                <Text style={estilo.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas} 
                editavel={selecionado}
                grande={selecionado}/>
            </View>
            <Text style={estilo.distancia}>{distanciaTexto}</Text>
        </View>
    </TouchableOpacity>
}

const estilo = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',
        elevation: 2,
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    informacoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold',
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
})