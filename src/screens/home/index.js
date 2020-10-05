import React, { useState, useEffect } from "react";
import { FlatList, Text } from "react-native";
import api from '../../services/api';

import Header from "../../components/header";
import CardProduct from "../../components/cardProduct";
import { Container } from "./style";




const Home = () => {

  const [productsLists, setProductsLists] = useState([]);

  useEffect(() => {
    const handleListProduct = async () => {


      try {
        const response = await api.get('/produto');
        const list = response.data;
        
        setProductsLists(list);

      } catch (error) {
        alert('Erro no acesso a API');
      }
    };
    handleListProduct();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <FlatList data={productsLists} keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <CardProduct fotoLink={item.fotoLink} nome={item.nome} 
               valor={item.valor} descricao={item.descricao} />
          )} />
      </Container>
    </>
  );
};

export default Home;