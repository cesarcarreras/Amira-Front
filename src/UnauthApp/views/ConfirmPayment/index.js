import React, {useState, useEffect} from 'react'
import { Heading,
    Flex,
    Spacer,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,} from '@chakra-ui/react'
import { orderDetailEP } from '@services/order-ws'
import { oneUser } from '@services/user-ws'

export default function ConfirmPayment() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("userLocal")) || [])
    const [order, setOrder] = useState(JSON.parse(localStorage.getItem("orderLocal")))
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    useEffect(() => {
        oneUser(user[0]._id)
        .then(user => setUser(user.data.user))
        .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        orderDetailEP(order)
        .then(order => setOrder(order.data.order._id))
        .catch(err => console.log(err))
    }, [])



    return (
        <>
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
              'https://icons-for-free.com/iconfiles/png/512/complete+done+green+success+valid+icon-1320183462969251652.png'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
        ¡Muchas gracias por tu compra, {user?.name}!
        </Heading>
        <Text fontWeight={400} color={'gray.500'} mb={4}>
          En breve recibirás un correo de confirmación
        </Text>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Nombre: {user?.name}
        </Text>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Correo: {user?.email}
        </Text>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Dirección de Entrega: {user?.address}
        </Text>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          A continuación encontrarás un resumen de tu pedido:
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>

          {cartItems.map(item => (
            <Box flexDirection='row' overflow="scroll" key={item._id}>
              <Avatar src={item.img[0]} />
                <Text>{item.title}</Text>
                <Text> Cantidad:{item.qty} ${item.price}</Text>
                </Box>
            ))}
        </Stack>

        <Flex ml="30px" mr="30px" mt="30px">
            <Text>IVA 16%</Text>
            <Spacer/>
            <Text>${order?.iva}</Text>
        </Flex>

        <Flex ml="30px" mr="30px">
            <Text>Envío</Text>
            <Spacer/>
            <Text>${order?.shippingPrice}</Text>
        </Flex>

        <Flex ml="30px" mr="30px">
            <Text>Total</Text>
            <Spacer/>
            <Text>${order?.total}</Text>
        </Flex>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
           as="a"
            href="/products"
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Seguir Comprando
          </Button>
          <Button
            as="a"
            href="/order-status"
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Estado de mi pedido
          </Button>
        </Stack>
      </Box>
    </Center>
        </>
     )
};