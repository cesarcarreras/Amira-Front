
import React, {useState} from 'react'
import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    Box,
    Center,
    Tooltip,
    Avatar,
    Spacer,
    useToast} from '@chakra-ui/react'
import { trackOrderEP } from '@services/order-ws'
import useInput from '@hooks/useInput.js';
import handleAsync from '@utils/handleAsync.js';

import Logo from '@assets/images/logo.png'

export default function OrderStatus() {

    const [orderFound, setOrderfound] = useState([])
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem("orderLocal")) || [])
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    const [loading, setLoading] = useState(false)
    const toast = useToast()

    const orderNumber = useInput('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        const orderFound = await handleAsync(() => trackOrderEP(orderNumber.value))
        console.log("Si se encontró", orderFound)

        if(orderFound){
            toast({
                position: 'top-right',
                title: "Pedido encontrado",
                status: 'success',
                duration: 3000,
            })
            setTimeout(() => {
                window.location.reload();
                setLoading(false)
            }, 3000)
        } else{
            toast({
                position: 'top-right',
                title: "Pedido no encontrado",
                description: "Revisa nuevamente el número de Pedido",
                status: 'error',
                duration: 3000,
                isClosable: true
            })
            setLoading(false)
        }
    }

    const inputs = [
        {
            placeholder : 'ID******',
            type: 'text',
            control: {...orderNumber}
        }
    ]

    return (
        <>
       {order === [] || undefined || null ?
       <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'gray.50'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={'white'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} className="header-font">
          Introduce el número de pedido:
        </Heading>
        <FormControl id={orderNumber}>
            {inputs.map((input, index) => (
                <Box key={index}>
            <Input
                {...input.control}
                type={input.type}
                color="gray.500"
                focusBorderColor="blue.500"
                placeholder={input.placeholder}
                mb={5}
                variant="flushed"
                _placeholder={{ color: 'gray.500' }}
            />
            </Box>
            ))}
        </FormControl>
            <Stack spacing={6}>
            <Button
                isLoading={loading}
                onClick={handleSubmit}
               className="header-font"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                bg: 'blue.500',
                }}>
                Ver estado de pedido
            </Button>
            </Stack>
            <Text
            className="body-font"
          fontSize="sm"
          color={'gray.400'}>
          Tú número de pedido lo encuentras en tu correo de confirmación. Si no lo conoces, por favor contactanos a hola@amirasoap.com
        </Text>
      </Stack>
    </Flex>

    :

 <Center p="10%">
      <Box
        maxW={'550px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'3xl'}
          src={Logo}
          alt={'Logo Alt'}
          mb={4}
          pos={'full'}
          backgroundColor="white"
        />
        <Heading fontSize={'2xl'} fontFamily={'body'} className="header-font" mb={4}>
        ¡Hola, {order?._user.name}!
        </Heading>
        <Text fontWeight={400} color={'gray.500'} mb={4}>
          ¡Gracias por confiar en nosotros!
        </Text>

        <Text fontWeight={400} color={'gray.500'} mb={4}>
          A continuación encontrarás el estado de tu pedido:
        </Text>

        <Text
          textAlign={'center'}
          color={'gray.400'}
          px={3}>
          Estado del pedido: {order?.status}
        </Text>

        <Text
          textAlign={'center'}
          color={'gray.400'}
          px={3}>
          Correo: {order?._user.email}
        </Text>

        <Text
          textAlign={'center'}
          color={'gray.400'}
          px={3}>
          Dirección de Entrega: {order?._user.address}
        </Text>



        <Stack align={'center'} justify={'center'} direction={'row'} mt={8}>

        {cartItems.map(item => (
            <Box flexDirection='row' overflow="scroll" key={item._id}>
              <Avatar src={item.img[0]} />
                <Text> {item.title}</Text>
                <Text textAlign={'center'} color={'gray.400'}px={3}>
                        Cantidad:{item.qty} ${item.price}
                </Text>
                </Box>
            ))}
        </Stack>

        <Flex ml="30px" mr="30px" mt="30px">
            <Text>IVA 16%</Text>
            <Spacer/>
            <Text>${order.iva}</Text>
        </Flex>

        <Flex ml="30px" mr="30px">
            <Text>Envío</Text>
            <Spacer/>
            <Text>${order.shippingPrice}</Text>
        </Flex>

        <Flex ml="30px" mr="30px">
            <Text>Total</Text>
            <Spacer/>
            <Text>${order.total}</Text>
        </Flex>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            as="a"
            href='/products'
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            colorScheme="blue"
            _hover={{
                colorScheme: 'teal',
            }}>
            Ver mas productos
          </Button>
        </Stack>
      </Box>
    </Center>
    }
       </>
    )
}