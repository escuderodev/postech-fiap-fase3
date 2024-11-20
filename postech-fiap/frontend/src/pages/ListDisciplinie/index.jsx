import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { discipliniesList } from '../../data/disciplinies.js';
import { DisciplinieItem } from '../../components/DisciplinieItem/DisciplinieItem.jsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

export function DiscipliniesList() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Disciplinas Cadastradas:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('DisciplineForm')
          }}
        >
          <Text style={styles.buttonText}>Nova Disciplina</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {discipliniesList.map((item) => (
            <DisciplinieItem key={item._id} {...item} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}