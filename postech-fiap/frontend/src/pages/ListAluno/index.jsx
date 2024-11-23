import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { AlunoList } from '../../data/alunos.js';
import { AlunoItem } from '../../components/AlunoItem/AlunoItem.jsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

export function ListAluno() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Alunos:</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {AlunoList.map((item) => (
            <AlunoItem key={item._id} {...item} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}