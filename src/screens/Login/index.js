
import React from 'react';
import SubmitButton from '../../components/submitButton'

import {
  Container,
  ContainerLog,
  TextHeader,
  TextLog,
} from './style'

const Login= () => {
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