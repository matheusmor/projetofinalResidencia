import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.containerTitle}>
        <Text style={styles.titulo}>Boas-vindas ao</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.titulo}>Mercado Luigi</Text>
      </View>
      <View style={styles.spacer} />
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate('Following')}>
          <Text style={{fontWeight: 'bold', color: '#000'}}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerTitle: {
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 8,
    borderRadius: 5,
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#fff159',
    padding: 8,
    borderRadius: 5,
  },

  containerButton: {
    flex: 0.25,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },

  spacer: {
    paddingBottom: 30,
  },
});

export default Welcome;
