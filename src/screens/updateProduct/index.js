import React, { useState, useEffect } from "react";

import api from "../../services/api";
import notFound from "../../../assets/images/image-not-found.jpg";
import SubmitButton from "../../components/submitButton";

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

const Update = ({ route }) => {
  const [produto, setProduto] = useState();
  const [categorias, setCategorias] = useState([]);

  const id = route.params?.id ?? 1;

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const response = await api.get(`/produto/${id}`);
        const prod = response.data;

        setProduto(prod);
      } catch (error) {
        alert("Erro no acesso a API");
      }
    };
    handleProduct();
    console.log(produto);
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

  const handleUpdateProduct = async (id) => {
    try {
      await api.put(`/produto/${id}`, produto);
    } catch (error) {
      alert("Erro no acesso a API");
    }
  };

  const addDefaultImg = () => {
    setProduto({ ...produto, fotoLink: { uri: notFound } });
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleUpdateProduct();
  };

  const findCategoria = (id) => {
    const result = categorias.find((cat) => cat.id === parseInt(id));
    return result.nome;
  };

  return (
    <>
      <ContainerTop>
        <ContainerImg
          source={{ uri: produto?.fotoLink }}
          onError={addDefaultImg}
        ></ContainerImg>
        <ContainerInf>
          <ContainerName>
            <Input
              placeholder={produto?.nome}
              value={produto?.nome}
              onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
            />
          </ContainerName>
          <ContainerPrice>
            <Input placeholder={produto?.valor.toString()} />
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
      <SubmitButton />
    </>
  );
};

export default Update;
