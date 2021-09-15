import React, { useState, useRef } from 'react'
import { Avatar, Box, Flex, Spacer, Text, useToast, AlertDialog,
   Button,
   AlertDialogBody,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogContent,
   AlertDialogOverlay,
   Heading,} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';
import { SignupForm, Paypal } from '@components';
import handleAsync from '@utils/handleAsync.js';
import useInput from '@hooks/useInput.js';
import { deleteUserEP, createUserEP } from '@services/user-ws';
import { createOrderEP } from '@services/order-ws';

export default function Checkout(){

   const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])
   const [user, setUser] = useState(JSON.parse(localStorage.getItem("userLocal")))
   const [order, setOrder] = useState(JSON.parse(localStorage.getItem("orderLocal")) || [])

   const itemsPrice = cartItems.reduce((acc, current) => acc + current.price * current.qty, 0);
   const taxPrice = itemsPrice * 0.21;
   const shippingPrice = itemsPrice > 50 ? 0 : 5.99;
   const totalPrice = itemsPrice + taxPrice + shippingPrice;

   const [isOpen, setIsOpen] = useState(false)
   const onClose = () => setIsOpen(false)
   const cancelRef = useRef()

   const toast = useToast()

   const name = useInput('')
   const lastName = useInput('')
   const email = useInput('')
   const birthday = useInput('')
   const address = useInput('')
   const phone = useInput('')

   const history = useHistory()

   const [loading, setLoading] = useState(false)

   const handleCreateUser = async e => {
      setIsOpen(true) //<--- QUITAR ESTO DESPUES DE PRUEBAS
      e.preventDefault()
      setLoading(true)
      const data = {
          name: name.value,
          lastName: lastName.value,
          email: email.value,
          birthday: birthday.value,
          address: address.value,
          phone: phone.value,
      }

      const user = await handleAsync(() => createUserEP(data))

      const Orderdata = {
         total: totalPrice.toFixed(2),
         _user: user._id,
         _products: cartItems,
     }

      const order = await handleAsync(() => createOrderEP(Orderdata))

      setOrder(order)
      if(order){
         localStorage.setItem("orderLocal", JSON.stringify(order))
      }

      console.log(order)

      setUser(user)
      if(user){
         localStorage.setItem("userLocal", JSON.stringify([user]))
          toast({
              position: 'top-right',
              title: "Cuenta creada correctamente",
              status: 'success',
              duration: 3000,
          })
          setLoading(false)
          setTimeout(() => {
               setIsOpen(true)
          }, 1000)

      }else{
          toast({
              position: 'top-right',
              title: "Error",
              description: "Algo salió mal",
              status: 'error',
              duration: 3000,
              isClosable: true
          })
          setLoading(false)
      }

      console.log(user)
  };

  const handleDelete = (id) => {
   deleteUserEP(id)
   localStorage.removeItem("userLocal")
   setUser(undefined)
  }

   const inputs = [
      {
          placeholder : 'James',
          type: 'text',
          labelName: 'Nombre',
          control: {...name}
      },
      {
          placeholder : 'Bond',
          type: 'text',
          labelName: 'Apellido',
          control: {...lastName}
      },
      {
          placeholder : 'James@bond.com',
          type: 'email',
          labelName: 'Correo',
          control: {...email}
      },
      {
         placeholder : 'Dirección Completa',
         type: 'email',
         labelName: 'Correo',
         control: {...address}
     },
      {
          placeholder : 'Teléfono',
          type: 'number',
          labelName: 'Número de teléfono',
          control: {...phone}
      },
      {
          placeholder : 'Fecha de Nacimiento',
          type: 'date',
          labelName: 'Fecha de Nacimiento',
          control: {...birthday}
      }
   ]

   return(
      <Flex alignItems="center" direction="column">
      <Flex justify="center" alignItems="center" w="100%" h="100vh" backgroundColor="coral.500">
           <AlertDialog
               isOpen={isOpen}
               leastDestructiveRef={cancelRef}
               onClose={onClose}
               size={"2xl"}
               >
               <AlertDialogOverlay>
                  <AlertDialogContent>
                     <AlertDialogHeader fontSize="lg" fontWeight="bold" textAlign="center">
                     ¿Cómo te gustaría Pagar?
                     </AlertDialogHeader>

                     <AlertDialogBody>
                     <Flex justify="space-around" alignItems="center" >
                     <Button onClick={onClose}>
                        MercadoPago
                     </Button>

                      <Paypal/>

                     </Flex>

                     </AlertDialogBody>

                     <AlertDialogFooter>
                     <Button ref={cancelRef} onClick={onClose}>
                        Cancelar
                     </Button>
                     </AlertDialogFooter>
                  </AlertDialogContent>
               </AlertDialogOverlay>
               </AlertDialog>




         <Box w="80vw" h="70vh" borderWidth="1px" borderRadius="lg" overflow="hidden" borderRadius="30px" backgroundColor="white">
         <Flex>

         <Box w="50%" h="70vh" borderWidth="1px" borderRadius="lg" overflow="hidden" borderRadius="30px">
       { user ?
       <>
         <Heading>¡Hola, {user.name}!</Heading>
         <Flex direction="column">
           <Text> ¿Tus datos son correctos?</Text>
           <Text> Correo: {user.email} </Text>
           <Text> Dirección: {user.address} </Text>
           <Text> Número de Telefono: {user.phone} </Text>
         </Flex>

         <Flex mt={20}>
             <Text>¿Algún dato es incorrecto?</Text><Button onClick={() => handleDelete(user._id)} >Editar</Button>
         </Flex>

         <Flex mt={20}>
             <Text>¿Falló el pago?, !Intentalo nuevamente!</Text><Button>Pagar</Button>
         </Flex>
         </>
       :
         <SignupForm  inputs={inputs} actionButton={handleCreateUser} loading={loading}/>
       }
         </Box>

            <Flex direction="column" w="50%">
               <Box w="100%" h="350px" borderWidth="1px" borderRadius="lg" overflow="hidden" borderRadius="30px" overflow="scroll" >
                  <Flex justify="center">
                     <Text>Order Summary</Text>
                  </Flex>

                  <Flex direction="column">
                  {cartItems.map((item) => (
                     <Box w="100%" m="10px" key={item._id}>
                        <Flex justify="center" alignContent="space-around" >
                              <Avatar w="100px" h="80px" src={item.img}/>
                           <Flex direction="column" ml="40px" >
                              <Text>{item.title}</Text>
                              <Text>{item.description}</Text>
                              <Text> qty:{item.qty} €{item.price}</Text>
                           </Flex>
                        </Flex>
                     </Box>
                  ))}
                  <Button m="20px" onClick={() => history.push('/products')}>Añadir más productos</Button>
                  </Flex>
                  </Box>

                 <Box w="100%" h="150px" borderWidth="1px" borderRadius="lg" overflow="hidden" borderRadius="30px">

                        <Flex ml="30px" mr="30px" mt="30px">
                           <Text>Total Productos</Text>
                           <Spacer/>
                           <Text>€{itemsPrice.toFixed(2)}</Text>
                        </Flex>

                        <Flex ml="30px" mr="30px">
                           <Text>IVA 21%</Text>
                           <Spacer/>
                           <Text>€{taxPrice.toFixed(2)}</Text>
                        </Flex>

                        <Flex ml="30px" mr="30px">
                           <Text>Envío</Text>
                           <Spacer/>
                           <Text>€{shippingPrice.toFixed(2)}</Text>
                        </Flex>

                        <Flex ml="30px" mr="30px" mt="20px">
                           <Text>Total</Text>
                           <Spacer/>
                           <Text>€{totalPrice.toFixed(2)}</Text>
                        </Flex>
                  </Box>
               </Flex>
         </Flex>
         </Box>
      </Flex>
      </Flex>
   )
}