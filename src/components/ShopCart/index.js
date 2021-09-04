import { Box, Heading, Popover, Button, Portal, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, Text } from '@chakra-ui/react'
import React from 'react'

export default function ShopCart(props) {

    const {cartItems, onAdd, onRemove} = props

    return (
        <Popover>
        <PopoverTrigger>
            <Button>Ver Carrito</Button>
        </PopoverTrigger>
        <Portal>
            <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>{cartItems.length === 0 && <Text>El carrito está vacío</Text>}</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody>
              {cartItems.map((item) => (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>

                    <div>
                        {item.qty} X ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            </PopoverBody>
            <PopoverFooter> <Button colorScheme="blue">Pagar</Button></PopoverFooter>
            </PopoverContent>
        </Portal>
        </Popover>
    )
}
