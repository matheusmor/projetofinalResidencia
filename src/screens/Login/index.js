
import React from 'react';
import SubmitButton from '../../components/submitButton'

import {
  Container,
  ContainerLog,
  TextHeader,
  TextLog,
} from './style'

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
      <Container>
        <ContainerLog>
          <TextHeader>Usuario:</TextHeader>
          <TextLog></TextLog>
          <TextHeader>Senha:</TextHeader>
          <TextLog></TextLog>
          <SubmitButton />
        </ContainerLog>
      </Container>
    </>
  );
};

export default Login;