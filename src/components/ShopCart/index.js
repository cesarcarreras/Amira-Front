import React from 'react'
import { Avatar, Popover, Button, Portal, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody, PopoverFooter, Text, Box, Flex, Heading, Image } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import emptyCart from '@assets/images/empty.png'

export default function ShopCart(props) {

    const {onAdd, onRemove, removeAll} = props

    const history = useHistory()

    const goToCheckout = () => history.push('/checkout')

    return (
        <Popover>
        <PopoverTrigger>
            <Button colorScheme="blue">Ver Carrito</Button>
        </PopoverTrigger>

        <Portal>
            <PopoverContent w="450px">
            <PopoverCloseButton />
            <PopoverBody>
             {props.cartItems !== undefined && props.cartItems.length ? props.cartItems.map((item) => (
                <Box key={item._id} p={1} >
                <Flex direction="row">
                    <Flex p="10px">
                     <Avatar src={item.img[0]} borderRadius="full" w="100px" h="100px" />
                    </Flex>


                 <Flex direction="column">
                    <Heading className="header-font" fontSize="26px">{item.title}</Heading>

                 <Flex direction="row" p="10px">
                   <Button onClick={() => onAdd(item)}>+</Button>
                    <Button onClick={() => onRemove(item)}>-</Button>
                </Flex>
                 </Flex>
                 <Flex alignItems="flex-end" p="15px">
                     <Text className="body-font"> {item.qty} x ${item.price.toFixed(2)} </Text>
                 </Flex>

                </Flex>
                </Box>
            )) :
            <Flex direction="column" alignItems="center">
                <Image src={emptyCart} w="100px" p={5}/>
                <Text>Añade productos para verlos en tu carrito</Text>
            </Flex>
            }

            </PopoverBody>
            { props.cartItems !== undefined && props.cartItems.length ?
            <PopoverFooter>
            <Button colorScheme="red" onClick={removeAll}>Vaciar Carrito</Button>
            <Button colorScheme="blue" onClick={goToCheckout}>Pagar</Button>
            </PopoverFooter>
            :<div></div>
            }
            </PopoverContent>
        </Portal>
        </Popover>
    )
}
