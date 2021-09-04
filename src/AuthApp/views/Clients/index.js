import React, {useEffect, useState} from 'react'
import { allUsersEP } from '@services/user-ws';
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Button } from '@chakra-ui/react';

export default function Clients() {

    const [clients, setClients] = useState([])

    useEffect(() => {
        allUsersEP()
        .then(({data}) => setClients([...data.users]))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <Heading>CLIENTES</Heading>
        <Table variant="simple">
        <Thead>
            <Tr>
            <Th>Nombre</Th>
            <Th>Apellido</Th>
            <Th>Correo</Th>
            <Th>Role</Th>
            <Th># Compras</Th>
            <Th>Editar</Th>
            <Th>Borrar</Th>
            </Tr>
        </Thead>
        <Tbody>
        {clients.map(client => (
            <Tr key={client.id}>
            <Td>{client.name}</Td>
            <Td>{client.lastName}</Td>
            <Td >{client.email}</Td>
            <Td >{client.role}</Td>
            <Td >{client.purchases}</Td>
            <Td ><Button colorScheme="teal" size="xs">Editar</Button></Td>
            <Td ><Button colorScheme="red" size="xs">Borrar</Button></Td>
            </Tr>
        ))}
        </Tbody>
        </Table>
        </>
    )
}
