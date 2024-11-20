import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  logo: {
    width: '100%',
    resizeMode: 'contain'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12

  },
  subTitle: {
    color: '#a1a1a1',
    fontSize: 18,
    fontWeight: '500'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#333333',
    borderRadius: 50,
    padding: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
});