import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContainer: {
    backgroundColor: '#333333',
    paddingLeft: 10,
    paddingRight: 24
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e5bf3c",
    marginBottom: 16,
    width: '80%'
  },
  button: {
    backgroundColor: '#e5bf3c',
    width: '80%',
    borderRadius: 5,
    padding: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  scrollView: {
    height: '80%',
  },
});