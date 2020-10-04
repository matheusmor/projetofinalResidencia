import React from 'react';

import {
  Container,
  ContainerImg,
  ContainerCont,
  ContainerInf,
  Name,
  Price,
  Description,
} from './style';

import notFound from '../../../assets/images/image-not-found.jpg'

function CardProduct ({fotoLink,nome,valor,descricao})  {

  const addDefaultImg = (e) => {
    e.target.src = notFound;
  }

  return (
    <Container>
      <ContainerImg source={{uri: fotoLink}} ></ContainerImg>
      <ContainerCont>
        <ContainerInf>
          <Name>{nome}</Name>
        </ContainerInf>
        <ContainerInf>
          <Price>R$ {valor}</Price>
        </ContainerInf>
        <ContainerInf>
          <Description>{descricao}</Description>
        </ContainerInf>
      </ContainerCont>
    </Container>
  );
};

export default CardProduct;
