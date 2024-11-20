import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#333333'
  },
  content: {
    width: '80%',
  },
  button: {
    backgroundColor: '#e5bf3c',
    width: '100%',
    borderRadius: 5,
    padding: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    color: '#e5bf3c'
  },
  input: {
    borderWidth: 1,
    padding: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 8
  },
});