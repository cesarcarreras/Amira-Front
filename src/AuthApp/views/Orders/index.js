import React, {useEffect, useState} from 'react'
import { allOrdersEP } from '@services/order-ws';
import { Table, Thead, Tbody, Tr, Th, Td, Heading, Button, Badge, Tooltip } from '@chakra-ui/react';

export default function Orders() {
        const [orders, setOrders] = useState([])

        useEffect(() => {
            allOrdersEP()
            .then(({data}) => setOrders([...data.orders]))
            .catch(err => console.log(err))
        }, [])

        return (
            <>
            <Heading>PEDIDOS</Heading>
            <Table variant="simple">
            <Thead>
                <Tr>
                <Th>Pedido</Th>
                <Th>Estado</Th>
                <Th>Cliente</Th>
                <Th>Producto</Th>
                <Th>Total</Th>
                <Th>Editar</Th>
                <Th>Borrar</Th>
                </Tr>
            </Thead>
            <Tbody>
            {orders.map(order => (
                <Tr key={order.id}>
                <Td>{order.orderNumber}</Td>
                <Td>
                {
                  order.status === 'NEW' ? <Badge colorScheme="purple" color="white">NEW</Badge> :
                  order.status === 'CONFIRMED' ? <Badge colorScheme="orange" color="white">CONFIRMED</Badge> :
                  order.status === 'ON DELIVERY' ? <Badge colorScheme="teal" color="white">ON DELIVERY</Badge> :
                  order.status === 'COMPLETED' ? <Badge colorScheme="green" color="white">COMPLETED</Badge> :
                   <Badge colorScheme="red" color="white">CANCELED</Badge>
                 }
                </Td>
                <Td >
                <Tooltip label="New client" placement="top">
                {order._user.name}
                </Tooltip>
                </Td>
                <Td >{order._product.title}</Td>
                <Td >${order.total}</Td>
                <Td ><Button colorScheme="teal" size="xs">Editar</Button></Td>
                <Td ><Button colorScheme="red" size="xs">Borrar</Button></Td>
                </Tr>
            ))}
            </Tbody>
            </Table>
            </>
        )
}

