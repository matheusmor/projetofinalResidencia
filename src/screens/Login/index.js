
import React, { useState } from 'react';
import SubmitButton from '../../components/submitButton'

import {
  Container,
  ContainerLog,
  TextHeader,
  TextLog,
  ContainerBody
} from './style'
import Usuario from '../../services/database'

import {criaTabela, funcao} from '../../services/database'
import { TouchableOpacity } from 'react-native-gesture-handler';
const Login= ({navigation}) => {
  const[login,setLogin]=useState('')
  const[password,setPassword]=useState('')
 
  criaTabela();
  funcao();
  const validacao=async()=>{
     
    const id = 0
const usuario = await Usuario.find(id)
if(login==usuario.login && password==usuario.password){
  alert("logado")
 navigation.navigate('Home')
 setLogin('');
 setPassword('')

}else{
  alert("nao logado")
}




console.log({usuario}, "usuario aqui")
  }

  return (
    
      <Container>
        <ContainerLog>
          <TextHeader>Usuario:</TextHeader>
          <TextLog value={login} onChangeText={text=>setLogin(text)}  ></TextLog>
          <TextHeader>Senha:</TextHeader>
          <TextLog value={password} onChangeText={text=>setPassword(text)} secureTextEntry={true}  ></TextLog>
          <TouchableOpacity onPress={validacao}>
          <SubmitButton />
          </TouchableOpacity>
        </ContainerLog>
      </Container>
     
    
  );
};

export default Login;