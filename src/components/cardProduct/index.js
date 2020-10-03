import React from "react";

import {
  Container,
  ContainerImg,
  ContainerCont,
  ContainerInf,
  Name,
  Price,
  Description,
} from "./style";

const CardProduct = () => {
  return (
    <Container>
      <ContainerImg></ContainerImg>
      <ContainerCont>
        <ContainerInf>
          <Name>Name</Name>
        </ContainerInf>
        <ContainerInf>
          <Price>Price</Price>
        </ContainerInf>
        <ContainerInf>
          <Description>Description</Description>
        </ContainerInf>
      </ContainerCont>
    </Container>
  );
};

export default CardProduct;
