import React, { useState, useEffect } from "react";
import { Picker } from '@react-native-community/picker';
import api from "../../services/api";

import notFound from "../../../assets/images/image-not-found.jpg";
import SubmitButton from "../../components/submitButton";
import DeleteButton from "../../components/deleteButton";

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
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { View } from "react-native";

const Update = ({ route, navigation }) => {
  const [produto, setProduto] = useState();
  const [foto, setFoto] = useState();
  const [categorias, setCategorias] = useState([]);
  const id = route.params?.id ?? 1;

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const response = await api.get(`/produto/${id}`);
        const prod = response.data;

        setProduto(prod);
        setFoto({ uri: prod.fotoLink });
      } catch (error) {
        alert("Erro no acesso a API");
      }
    };
    handleProduct();
  }, []);

  useEffect(() => {
    const handleListCategorias = async () => {
      try {
        const response = await api.get("/categoria");
        const list = response.data;
        const namesList = [];
        list.forEach((item) => {
          namesList.push(item);
        });
        setCategorias(namesList);
      } catch (error) {
        alert("Erro no acesso a API");
      }
    };
    handleListCategorias();
  }, []);

  const handleUpdateProduct = async () => {
    if (produto.valor < 0 || produto.qtdEstoque < 0) {
      alert('Valor e Estoque não podem ser negativos')
    }
    else{
      try {
        await api.put(`/produto/${id}`, produto);
        navigation.replace('Home');
      } catch (error) {
        alert("Erro no acesso a API");
      }
    }
  };

  const safeParseInt = (string) => {

    const value = parseInt(string);
    Math.abs(value)
    return isNaN(value) ? 0 : value
  }

  const safeParseFloat = (string) => {

    const value = parseFloat(string);
    return isNaN(value) ? 0 : value
  }

  const handleDelete = async () => {
    try {
      await api.delete(`/produto/${id}`);
      navigation.replace('Home');

    } catch (error) {
      alert('Erro no acesso a API');
    }
  }

  const addDefaultImg = () => {
    setFoto(notFound);
  };

  return (
    <>
      <ScrollView>
        <ContainerTop>
          <ContainerImg source={foto} onError={addDefaultImg}></ContainerImg>
          <ContainerInf>
            <ContainerName>
              <Input
                placeholder="Nome"
                value={produto?.nome}
                onChangeText={(text) => setProduto({ ...produto, nome: text })}
              />
            </ContainerName>
            <ContainerPrice>
              <Input
                placeholder="Valor"
                defaultValue={produto?.valor.toString()}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={(text) =>
                  setProduto({ ...produto, valor: safeParseFloat(text) })
                }
              />
            </ContainerPrice>
            <ContainerDesc>
              <InputDesc
                placeholder="Descrição"
                value={produto?.descricao}
                onChangeText={(text) =>
                  setProduto({ ...produto, descricao: text })
                }
              />
            </ContainerDesc>
          </ContainerInf>
        </ContainerTop>
        <ContainerBot>
          <ContainerStock>
            <Input
              placeholder="Estoque"
              defaultValue={produto?.qtdEstoque.toString()}
              keyboardType="numeric"
              onChangeText={(text) =>
                setProduto({ ...produto, qtdEstoque: safeParseInt(text) })
              }
            />
          </ContainerStock>
          <ContainerCategory>
            <Picker selectedValue={produto?.idCategoria}
              onValueChange={itemValue => setProduto({ ...produto, idCategoria: itemValue })} >
              <Picker.Item label="Selecione uma categoria" value={null} disabled />
              {categorias.map(cat => {
                return <Picker.Item key={cat.id} label={cat.nome} value={cat.id} />
              })}
            </Picker>
          </ContainerCategory>
        </ContainerBot>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={handleUpdateProduct}>
            <SubmitButton />
          </TouchableOpacity>
          <View style={{ width: 20 }} />
          <TouchableOpacity onPress={handleDelete}>
            <DeleteButton />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Update;
