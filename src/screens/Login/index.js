
import React from 'react';
import {Text} from 'react-native'
import{NavigationContainer} from '@react-navigation/native';



const Login= () => {
  
  criaTabela();
  funcao();
  const validacao=async()=>{
    // input login input password > select database login e senha if === return true 
    const id = 0
const usuario = await Usuario.find(id)



alert(usuario.login)
console.log({usuario}, "usuario aqui")
  }

  return (
    <>
      <Button title='botao'onPress={validacao} ></Button>
    </>
  );
};

export default Login;