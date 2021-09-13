import React, { useState } from 'react'
import { Avatar, Box, Flex, Spacer, Text, useToast, Button } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';
import { signupEP } from '@services/auth-ws.js';
import { SignupForm } from '@components';
import handleAsync from '@utils/handleAsync.js';
import useInput from '@hooks/useInput.js';

export default function Checkout(){

   const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

   const itemsPrice = cartItems.reduce((acc, current) => acc + current.price * current.qty, 0);
   const taxPrice = itemsPrice * 0.21;
   const shippingPrice = itemsPrice > 50 ? 0 : 5.99;
   const totalPrice = itemsPrice + taxPrice + shippingPrice;

   const toast = useToast()

   const name = useInput('')
   const lastName = useInput('')
   const email = useInput('')
   const password = useInput('')
   const birthday = useInput('')
   const address = useInput('')
   const role = useInput('USER')

   const history = useHistory()

   const [loading, setLoading] = useState(false)

   const handleSignup = async e => {
      e.preventDefault()
      setLoading(true)
      const data = {
          name: name.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
          birthday: birthday.value,
          address: address.value,
          role: role.value
      }

      const {user} = await handleAsync(() => signupEP(data))

      console.log(user)
      if(user){
          toast({
              position: 'top-right',
              title: "Cuenta creada correctamente",
              status: 'success',
              duration: 3000,
          })
          setLoading(false)
          setTimeout(() => {
              history.push('/dashboard/payment')
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
  };

   const inputs = [
      {
          placeholder : 'James',
          type: 'text',
          icon: 'user',
          labelName: 'Nombre',
          control: {...name}
      },
      {
          placeholder : 'Bond',
          type: 'text',
          icon: 'user',
          labelName: 'Apellido',
          control: {...lastName}
      },
      {
          placeholder : 'James@bond.com',
          type: 'email',
          icon: 'user',
          labelName: 'Correo',
          control: {...email}
      },
      {
         placeholder : 'Dirección Completa',
         type: 'email',
         icon: 'user',
         labelName: 'Correo',
         control: {...address}
     },
      {
          placeholder : '* * * * * * * * ',
          type: 'password',
          icon: 'pwd',
          labelName: 'Contraseña',
          control: {...password}
      },
      {
          placeholder : 'Fecha de Nacimiento',
          type: 'date',
          labelName: 'Fecha de Nacimiento',
          control: {...birthday}
      }
   ]

   return(
      <Flex justify="center" alignItems="center" p="10%" backgroundColor="coral.500">
         <Box w="80vw" h="70vh" borderWidth="1px" borderRadius="lg" overflow="hidden" borderRadius="30px" backgroundColor="white">
         <Flex>

         <Box w="50%" h="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" borderRadius="30px">
         <SignupForm
            inputs={inputs}
            actionButton={handleSignup}
            loading={loading}/>
         </Box>

            <Flex direction="column" w="50%">
               <Box w="100%" h="350px" borderWidth="1px" borderRadius="lg" overflow="hidden" borderRadius="30px" overflow="scroll" >
                  <Flex justify="center">
                     <Text>Order Summary</Text>
                  </Flex>
                  {cartItems.map((item) => (
                     <Box w="100%" mt="20px" key={item._id}>
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
   )
}