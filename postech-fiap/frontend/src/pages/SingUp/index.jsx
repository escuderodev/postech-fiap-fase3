import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export function SingUp() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Cadastro de Usuário</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu nome'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu e-mail'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Confirme sua senha'
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        navigation.navigate('LogIn')
                    }}
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}