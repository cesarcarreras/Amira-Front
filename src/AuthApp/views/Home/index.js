import React, { useState, useEffect } from 'react';
import { DataCard } from '@components';
import { Flex, Heading } from '@chakra-ui/react';
import { getMailActivity } from '@services/mailersend-ws';

const Home = () => {

    const [mailData,  setMailData] = useState([])

    useEffect(() => {
        getMailActivity()
        .then(({data}) => setMailData([...data.results]))
        .catch( err => console.log(err))
    }, [])

    console.log("Que nos trae la mailData ", mailData)

    return(
        <>

        <Heading>Overview</Heading>
        <Flex justify="space-between">
            <DataCard
                data="24"
                title="Pedidos nuevos"
            />

            <DataCard
                data="40"
                title="Productos comprados"
            />

            <DataCard
                data="107"
                title="Mensajes enviados"
            />
            </Flex>

            </>
    )
};

export default Home