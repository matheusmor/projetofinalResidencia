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
  InputDesc,
  InputCat,
} from "./style";

const AddProductCard = () => {
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

export default AddProductCard;
