import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { ProfessorList } from '../../data/professores.js';
import { ProfessorItem } from '../../components/ProfessorItem/ProfessorItem.jsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

export function ListProfessor() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Professores:</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {ProfessorList.map((item) => (
            <ProfessorItem key={item._id} {...item} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}