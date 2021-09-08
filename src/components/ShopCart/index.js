import { Popover, Button, Portal, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverCloseButton, PopoverBody, PopoverFooter, Text } from '@chakra-ui/react'
import React from 'react'

export default function ShopCart(props) {

    const {cartItems, onAdd, onRemove} = props

    const itemsPrice = cartItems.reduce((acc, current) => acc + current.price * current.qty, 0);
    const taxPrice = itemsPrice * 0.21;
    const shippingPrice = itemsPrice > 50 ? 0 : 5.99;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

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
                        <Button onClick={() => onAdd(item)}>+</Button>
                        <Button onClick={() => onRemove(item)}>-</Button>
                    </div>

                    <div>

                        {item.qty} X ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 &&(
                <>
                    <hr></hr>
                    <div>Productos</div>
                    <div>€{itemsPrice.toFixed(2)}</div>

                    <div>IVA</div>
                    <div>€{taxPrice.toFixed(2)}</div>

                    <div>Envío</div>
                    <div>€{shippingPrice.toFixed(2)}</div>

                    <div>Total</div>
                    <div>€{totalPrice.toFixed(2)}</div>
                </>
            )}
            </PopoverBody>
            <PopoverFooter>
            <Button colorScheme="blue">Pagar</Button>
            <Button colorScheme="red" >Vaciar Carrito</Button>
            </PopoverFooter>
            </PopoverContent>
        </Portal>
        </Popover>
    )
}
