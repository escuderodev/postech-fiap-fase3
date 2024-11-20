import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function DisciplineForm() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastro de Disciplina</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite o Título da Disciplina'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('DiscipliniesList')
                    }}
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}