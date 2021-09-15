import React, {useEffect, useState, useRef} from 'react'
import { allUsersEP, deleteUserEP } from '@services/user-ws';
import useInput from '@hooks/useInput.js';
import { PopoverFooter, PopoverCloseButton, PopoverArrow, PopoverBody, PopoverContent, IconButton, Popover, PopoverTrigger, Box, InputGroup, Drawer, DrawerHeader, Input, DrawerFooter, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, Table, Thead, Tbody, Tr, Th, Td, Heading, Button, Flex, Spacer, useDisclosure, useToast, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { createUserEP } from '@services/user-ws.js';
import { EditIcon } from '@chakra-ui/icons'

export default function Clients() {

    const [clients, setClients] = useState([])

    const toast = useToast('')

    const name = useInput('')
    const lastName = useInput('')
    const email = useInput('')

    const [isOpenConfirm, setIsOpenConfirm] = useState(false)
    const onCloseConfirm = () => setIsOpenConfirm(false)
    const cancelRef = useRef()
    const btnRef = useRef()

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [loading, setLoading] = useState(false)

    const inputs = [
        {
            placeholder : 'Nombre',
            type: 'text',
            labelName: 'Nombre',
            control: {...name}
        },
        {
            placeholder : 'Apellido',
            type: 'text',
            labelName: 'Apellido',
            control: {...lastName}
        },
        {
            placeholder : 'Correo',
            type: 'email',
            icon: 'user',
            labelName: 'Correo',
            control: {...email}
        },
    ]



    const handleDelete = (id) => {
        setLoading(true)
        try {
            deleteUserEP(id)
            toast({
                position: 'top-right',
                title: "Usuario Borrado",
                status: 'success',
                duration: 3000,
            })

            const newClients = clients.filter((item) => item._id !== id)

            setClients(newClients)
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

    const handleNewUser = async e => {
        e.preventDefault()
        setLoading(true)
        const dataUser = {
            name: name.value,
            lastName: lastName.value,
            email: email.value,
        }

        const {data} = await createUserEP(dataUser)

        try {
            if(data.user !== undefined){
                toast({
                    position: 'top-right',
                    title: "Cuenta creada correctamente",
                    status: 'success',
                    duration: 3000,
                })
                    setLoading(false)
                    onClose()
                    setClients([...clients, data.user])
            }
        } catch (error) {
            toast({
                position: 'top-right',
                title: "Error",
                description: "Algo salió mal",
                status: 'error',
                duration: 3000,
                isClosable: true
            })
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        allUsersEP()
        .then(({data}) => setClients([...data.users]))
        .catch(err => console.log(err))
    }, [])



    return (
        <>
        <Flex>
            <Heading>CLIENTES</Heading>
            <Spacer/>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>Crear Cliente</Button>

        <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Añadir nuevo cliente</DrawerHeader>
          <DrawerBody>
          {inputs.map((input, index) => (
                    <Box d="flex" w="100%" flexDirection="row" justifyContent="space-around" alignContent="center" alignItems="center" key={index}>
                        <InputGroup w="100%" size="md">
                            <Input
                                {...input.control}
                                type={input.type}
                                color="gray.500"
                                focusBorderColor="blue.500"
                                placeholder={input.placeholder}
                                mb={5}
                                variant="flushed"
                                required
                            />
                        </InputGroup>
                    </Box>
                ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="blue" variant="outline" onClick={handleNewUser} isLoading={loading}>
            Crear Usuario
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </Flex>

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
            <Tr key={client._id}>
            <Td>{client.name}</Td>
            <Td>{client.lastName}</Td>
            <Td >{client.email}</Td>
            <Td >{client.role}</Td>
            <Td >{client.purchases}</Td>
            <Td >
            <Popover>
            <PopoverTrigger>
            <IconButton size="sm" icon={<EditIcon />}/>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                {inputs.map((input, index) => (
                                    <Box d="flex" w="100%" flexDirection="row" justifyContent="space-around" alignContent="center" alignItems="center" key={index}>
                                        <InputGroup w="100%" size="md">
                                            <Input
                                                {...input.control}
                                                type={input.type}
                                                color="gray.500"
                                                focusBorderColor="blue.500"
                                                placeholder={input.placeholder}
                                                mb={5}
                                                variant="Flushed"
                                            />
                                        </InputGroup>
                                    </Box>
                                ))}
                </PopoverBody>

                <PopoverFooter
                    border="0"
                    d="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}
                    >

                        <Button colorScheme="teal" > Save </Button>

                    </PopoverFooter>

            </PopoverContent>
            </Popover>
            </Td>

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
                    <Button colorScheme="red" onClick={() => handleDelete(client._id)} ml={3} isLoading={loading}>
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
