import React, { useState, useEffect } from 'react';

import api from '../../services/api'

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
    const [foto, setFoto] = useState();

    const id = route.params?.id ?? 1;

    useEffect(() => {
        const handleProduct = async () => {


            try {
                const response = await api.get(`/produto/${id}`);
                const prod = response.data;

                setProduto(prod);
                setFoto({uri: prod.fotoLink});

            } catch (error) {
                alert('Erro no acesso a API');
            }
        };
        handleProduct();
    }, []);

    const handleUpdateProduct = async () => {

        try {
            await api.put(`/produto/${id}`, produto);

        } catch (error) {
            alert('Erro no acesso a API');
        }

    }

    const addDefaultImg = () => {
        setFoto(notFound);
    };

    const handleClick = (e) => {
        handleUpdateProduct();
    }

    return (
        <>
            <ContainerTop>
                <ContainerImg source={foto} onError={addDefaultImg}></ContainerImg>
                <ContainerInf>
                    <ContainerName>
                        <Input placeholder="Nome" value={produto?.nome} 
                         onChangeText={text => setProduto({ ...produto, nome: text })} />
                    </ContainerName>
                    <ContainerPrice>
                        <Input placeholder="Valor" defaultValue={produto?.valor.toString()} 
                            keyboardType='numeric'
                            maxLength={10}
                            onChangeText={text => setProduto({ ...produto, valor: parseFloat(text) })}/>
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
                    <Input placeholder="Categoria" />
                </ContainerCategory>
            </ContainerBot>
            <SubmitButton />
        </>
    )

}

export default Update;
