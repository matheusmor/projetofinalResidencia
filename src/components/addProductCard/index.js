import React, { useContext } from "react";
import { Picker } from '@react-native-community/picker';

import prodContext from '../../context'
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
  InputDesc,
  InputCat,
} from "./style";
import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";

const AddProductCard = () => {

  const { produto, setProduto,categorias } = useContext(prodContext);
  return (

    <>
      <ContainerTop>
        <ContainerImg source={notFound}></ContainerImg>
        <ContainerInf>
          <ContainerName>
            <Input placeholder="Name" defaultValue={produto.nome}
              onChangeText={text => setProduto({ ...produto, nome: text })} />
          </ContainerName>
          <ContainerPrice>
            <Input placeholder="Valor" defaultValue={produto?.valor.toString()}
              keyboardType='numeric'
              maxLength={10}
              onChangeText={text => setProduto({ ...produto, valor: parseFloat(text) })} />
          </ContainerPrice>
          <ContainerDesc>
            <Input placeholder="Descrição" value={produto?.descricao}
              onChangeText={text => setProduto({ ...produto, descricao: text })} />
          </ContainerDesc>
        </ContainerInf>
      </ContainerTop>
      <ContainerBot>
        <ContainerStock>
          <Input placeholder="Estoque" defaultValue={produto?.qtdEstoque.toString()}
            keyboardType='numeric'
            onChangeText={text => setProduto({ ...produto, qtdEstoque: parseInt(text) })} />
        </ContainerStock>
        <ContainerCategory>
          <Picker selectedValue={produto.idCategoria} 
            onValueChange={itemValue => setProduto({...produto, idCategoria: itemValue})} >
            {categorias.map(cat => {
              return <Picker.Item key={cat.id} label={cat.nome} value={cat.id}/>
            })}
          </Picker>
        </ContainerCategory>
      </ContainerBot>
    </>

  );
};

export default AddProductCard;
