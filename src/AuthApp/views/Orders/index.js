import React, {useEffect, useState, useRef} from 'react'
import { deleteOrderEP, allOrdersEP } from '@services/order-ws';
import { allUsersEP } from '@services/user-ws';
import { allProductsEP } from '@services/product-ws';
import { Input, Drawer, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Box, InputGroup, DrawerFooter, Flex, Spacer, useDisclosure, useToast, Table, Thead, Tbody, Tr, Th, Td, Heading, Button, Badge, Tooltip, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import useInput from '@hooks/useInput.js';

export default function Orders() {
        const [orders, setOrders] = useState([])

        const toast = useToast('')

        const { isOpen, onOpen, onClose } = useDisclosure()
        const onCloseConfirm = () => setIsOpenConfirm(false)
        const [loading, setLoading] = useState(false)
        const [isOpenConfirm, setIsOpenConfirm] = useState(false)
        const cancelRef = useRef()
        const btnRef = useRef()

        useEffect(() => {
            allOrdersEP()
            .then(({data}) => setOrders([...data.orders]))
            .catch(err => console.log(err))
        }, [])

        const handleDelete = (id) => {
            setLoading(true)
            try {
                deleteOrderEP(id)
                toast({
                    position: 'top-right',
                    title: "Pedido Borrado",
                    status: 'success',
                    duration: 3000,
                })

                const newOrders = orders.filter((item) => item._id !== id)
                setOrders(newOrders)
                setLoading(false)
                onCloseConfirm()
            } catch (error) {
                console.log(error)
                toast({
                    position: 'top-right',
                    title: "Error",
                    description: "Algo salió mal",
                    status: 'error',
                    duration: 3000,
                    isClosable: true
                })
            }
        }

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
                <Td>#{order.orderNumber}</Td>
                <Td>
                {
                  order.status === 'PENDING' ? <Badge colorScheme="purple" color="white">PENDING</Badge> :
                  order.status === 'PAID' ? <Badge colorScheme="yellow" color="white">PAID</Badge> :
                  order.status === 'CONFIRMED' ? <Badge colorScheme="orange" color="white">CONFIRMED</Badge> :
                  order.status === 'ON DELIVERY' ? <Badge colorScheme="teal" color="white">ON DELIVERY</Badge> :
                  order.status === 'COMPLETED' ? <Badge colorScheme="green" color="white">COMPLETED</Badge> :
                   <Badge colorScheme="red" color="white">CANCELED</Badge>
                 }
                </Td>
                <Td >
                <Tooltip label="New client" placement="top">
                     "Nombre del cliente"
                </Tooltip>
                </Td>
                <Td >{order._product.title}</Td>
                <Td >${order.total}</Td>
                <Td ><Button colorScheme="teal" size="xs">Editar</Button></Td>
                <Td >
                <Button colorScheme="red" size="xs" onClick={() => setIsOpenConfirm(true)}>Borrar</Button>
                <AlertDialog
                isOpen={isOpenConfirm}
                leastDestructiveRef={cancelRef}
                onClose={onCloseConfirm}
            >
                <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Borrar Cliente
                    </AlertDialogHeader>

                    <AlertDialogBody>
                    ¿Seguro que quieres proceder? No hay vuelta atrás.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onCloseConfirm}>
                        Cancelar
                    </Button>
                    <Button colorScheme="red" onClick={() => handleDelete(order._id)} ml={3} isLoading={loading}>
                        Borrar
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
                </Td>
                </Tr>
            ))}
            </Tbody>
            </Table>
            </>
        )
}