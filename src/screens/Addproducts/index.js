import React, { useState, useEffect, createContext } from "react";
import { View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProdContext from "../../context";

import AddProductCard from "../../components/addProductCard";
import SubmitButton from "../../components/submitButton";

import notFound from "../../../assets/images/image-not-found.jpg";

import api from "../../services/api";

const AddProducts = () => {
  const [categorias, setCategorias] = useState([]);
  const [foto, setFoto] = useState();

  const [produto, setProduto] = useState({
    dataFabricacao: "2019-10-01T00:00:00Z",
    descricao: "",
    fotoLink: notFound,
    id: 0,
    idCategoria: 0,
    idFuncionario: 1,
    nome: "",
    nomeCategoria: "",
    nomeFuncionario: null,
    qtdEstoque: 0,
    valor: 0,
  });

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

  const handleAddProduct = async () => {
    try {
      await api.post("/produto", produto);
    } catch (error) {
      alert("Erro no acesso a API");
    }
  };

  return (
    <>
      <ScrollView>
        <ProdContext.Provider value={{ produto, setProduto, categorias }}>
          <AddProductCard />
        </ProdContext.Provider>
        <TouchableOpacity onPress={handleAddProduct}>
          <SubmitButton />
        </TouchableOpacity>
        <View style={{ height: 20 }} />
      </ScrollView>
    </>
  );
};

export default AddProducts;
