import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import api from '../../services/api'
import UpdateProductCard from '../../components/updateProductCard'

const Update = ({ route, navigation }) => {

    const [produto, setProduto] = useState();
    const [categorias, setCategorias] = useState([]);

    const id = route.params?.id ?? 1;

    useEffect(() => {
        const handleProduct = async () => {


            try {
                const response = await api.get(`/produto/${id}`);
                const prod = response.data;

                setProduto(prod);
                console.log(produto)
            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleProduct();
    }, []);

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
    
    return (
        <>
            <Text>{id}</Text>
            <UpdateProductCard produto={JSON.stringify(produto)}/>
        </>
    )

}

export default Update;