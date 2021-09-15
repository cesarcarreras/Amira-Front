import React, {useState, useRef} from 'react';
import {useAuth} from '@utils/AuthContext';
import { logoutEP } from '@services/auth-ws';
import { useHistory } from 'react-router-dom';

import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    useColorModeValue,
    useToast
  } from '@chakra-ui/react';

const Profile = () => {

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()
    const history = useHistory()
    const toast = useToast()

    const handleLogout = () => {
        logoutEP()
        toast({
            position: 'top-right',
            title: "Has cerrado sesión correctamente",
            status: 'success',
            duration: 3000,
        })
        setTimeout(() => {
            window.location.reload();
            history.push('/products')
        }, 2000)
    }

    const [{user}] = useAuth()
    console.log(user)
    return(
        <Center py={6}>
        <Box
          maxW={'550px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={
                user.img
               }
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>

          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
           ¡Hola, {user.name}!
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Correo : {user.email}
          </Text>


          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Role : {user.role}
          </Text>

          <Stack mt={8} direction={'row'} >
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Editar
          </Button>
            <Button
              onClick={() => setIsOpen(true)}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'red.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',}}>
              Cerrar Sesión
            </Button>
          </Stack>
        </Box>


        <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Cerrar Sesión
            </AlertDialogHeader>

            <AlertDialogBody>
            ¿Estás seguro de querer cerrar sesión?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleLogout} ml={3}>
                Salir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      </Center>
    )
};

export default Profile;