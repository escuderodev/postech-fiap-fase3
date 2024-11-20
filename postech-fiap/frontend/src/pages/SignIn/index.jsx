import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={300} style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo(a)!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        placeholder='seuemail@provedor.com.br'
        style={styles.input}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Password:</Text>
      <TextInput
        placeholder='sua senha'
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={() => {
        navigation.navigate('DiscipliniesList')
      }}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonNewAccount}>
        <Text style={styles.buttonRegisterText}>Não possui uma conta? Registre-se!</Text>
      </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}