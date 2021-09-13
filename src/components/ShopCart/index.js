import React from 'react'
import { Avatar, Popover, Button, Portal, PopoverTrigger, PopoverContent, PopoverCloseButton, PopoverBody, PopoverFooter, Text, Box, Flex, Heading, Image } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import emptyCart from '@assets/images/empty.png'

export default function ShopCart(props) {

    const {onAdd, onRemove, removeAll} = props

    const history = useHistory()

    // const [cartItems, setItems] = useState( props.cartItems || JSON.parse(localStorage.getItem("cartItems")))

     const goToCheckout = () => history.push('/checkout')

    //  useEffect(() => {
    //     setItems(props.cartItems)
    //  }, [props.cartItems.length])

    return (
        <Popover>
        <PopoverTrigger>
            <Button>Ver Carrito</Button>
        </PopoverTrigger>
        <Portal>
            <PopoverContent w="450px">
            <PopoverCloseButton />
            <PopoverBody>

             {props.cartItems !== undefined && props.cartItems.length ? props.cartItems.map((item) => (
                <Box key={item._id} borderColor="blue" borderWidth="1px" p={1} >
                <Flex>
                    <Avatar src={item.img[0]} w="100px" size="lg" />
                 <Flex direction="column">
                    <Heading>{item.title}</Heading>
                 <Flex direction="row">
                   <Button onClick={() => onAdd(item)}>+</Button>
                    <Button onClick={() => onRemove(item)}>-</Button>
                </Flex>
                 </Flex>
                        {item.qty} X €{item.price.toFixed(2)}
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
            <Button colorScheme="blue" onClick={goToCheckout}>Pagar</Button>
            <Button colorScheme="red" onClick={removeAll}>Vaciar Carrito</Button>
            </PopoverFooter>
            :<div></div>
            }
            </PopoverContent>
        </Portal>
        </Popover>
    )
}
