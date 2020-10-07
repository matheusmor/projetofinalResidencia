import React, { useState, useEffect } from "react";
import {Text} from 'react-native'

import notFound from "../../../assets/images/image-not-found.jpg";

import {
  ContainerTop,
  ContainerBot,
  ContainerImg,
  ContainerStock,
  ContainerInf,
  ContainerName,
  ContainerPrice,
  ContainerDesc,
  ContainerCategory,
  Input,
  InputCat,
  InputDesc,
} from "./style";

const UpdateProductCard = (produto) => {

  //const [produto, setProduto] = useState(prod);

  /*useEffect(() => {
    setProduto(prod);
  }, [prod]);*/
  //console.log(produto)
  /*const addDefaultImg = () => {
    setProduto({...produto,fotoLink: notFound});
  };*/
    
  return (
    <>
      <ContainerTop>
        <ContainerImg source={{uri: produto?.fotoLink}} ></ContainerImg>
        <ContainerInf>
          <ContainerName>
            <Text>{produto?.nome}</Text>
            <Input placeholder={produto?.nome} value={produto?.nome} onChange={e => setProduto({...produto,nome:e.target.value})}/>
          </ContainerName>
          <ContainerPrice>
            <Input placeholder="Price" />
          </ContainerPrice>
          <ContainerDesc>
            <InputDesc placeholder="Description" />
          </ContainerDesc>
        </ContainerInf>
      </ContainerTop>
      <ContainerBot>
        <ContainerStock>
          <Input placeholder="Stock" />
        </ContainerStock>
        <ContainerCategory>
          <InputCat placeholder="Category" />
        </ContainerCategory>
      </ContainerBot>
    </>
  );
};

export default UpdateProductCard;
