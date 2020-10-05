import React from "react";

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
} from "./style";

const addProductCard = () => {
  return (
    <>
      <ContainerTop>
        <ContainerImg></ContainerImg>
        <ContainerInf>
          <ContainerName>
            <Input placeholder="Name" />
          </ContainerName>
          <ContainerPrice>
            <Input placeholder="Price" />
          </ContainerPrice>
          <ContainerDesc>
            <Input placeholder="Description" />
          </ContainerDesc>
        </ContainerInf>
      </ContainerTop>
      <ContainerBot>
        <ContainerStock>
          <Input placeholder="Stock" />
        </ContainerStock>
        <ContainerCategory>
          <Input placeholder="Category" />
        </ContainerCategory>
      </ContainerBot>
    </>
  );
};

export default addProductCard;
