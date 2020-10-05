import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import api from '../../services/api'


const Home = () => {

    const [produto, setProduto] = useState();
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const handleProduct = async (id) => {


            try {
                const response = await api.get(`/produto/${id}`);
                const prod = response.data;

                setProduto(prod);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleProduct();
    }, [id]);

    useEffect(() => {
        const handleListCategorias = async () => {


            try {
                const response = await api.get('/categoria');
                const list = response.data;
                const namesList = [];
                list.forEach(item => {
                    namesList.push(item)
                });
                setCategorias(namesList);

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleListCategorias();

    }, []);

    const handleUpdateProduct = async (id) => {

        try {
            await api.put(`/produto/${id}`, produto);

        } catch (error) {
            alert('Erro no acesso a API');
        }

    }

    const handleClick = (e) => {
        e.preventDefault();
        handleUpdateProduct();
    }

    const findCategoria = (id) => {
        const result = categorias.find(cat => cat.id === parseInt(id));
        return result.nome;
    }

    return <Text>login</Text>;

}

export default Home;