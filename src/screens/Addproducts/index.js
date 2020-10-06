import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

import AddProductCard from '../../components/addProductCard'

import api from '../../services/api'

const AddProducts = () => {

    const [categorias, setCategorias] = useState([]);

    const [produto, setProduto] = useState({
        dataFabricacao: '2019-10-01T00:00:00Z',
        descricao: '',
        fotoLink: null,
        id: 0,
        idCategoria: 0,
        idFuncionario: 1,
        nome: '',
        nomeCategoria: '',
        nomeFuncionario: null,
        qtdEstoque: null,
        valor: null
    });

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

    const handleAddProduct = async () => {

        try {
            await api.post('/produto', produto);

        } catch (error) {
            alert('Erro no acesso a API');
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        handleAddProduct();
    }

    const findCategoria = (id) => {
        const result = categorias.find(cat => cat.id === parseInt(id));
        return result.nome;
    }

    return (
        <>
            <Text>Produtos, melhor que AliExpress</Text>
            <AddProductCard />
        </>
    );
}

export default AddProducts;