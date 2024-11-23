import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Logo from '../../assets/caderno.png'
import { styles } from './styles';
import * as Animatable from 'react-native-animatable'; //lib para animações
import { useNavigation } from "@react-navigation/native"; //lib para navegação

export function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        source={Logo}
        style={styles.logo}
        />
      </View>
      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Sistema de Controle de Postagem de Aulas</Text>
        <Text style={styles.subTitle}>Faça Login</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate('LogIn')
          }}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}