import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { UserList } from '../../data/user.js';
import { UserItem } from '../../components/UserItem/UserItem.jsx';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.js';

export function ListUser() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Usuários:</Text>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView style={styles.scrollView}>
          {UserList.map((item) => (
            <UserItem key={item._id} {...item} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}