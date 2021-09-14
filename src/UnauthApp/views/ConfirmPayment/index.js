import React, {useState} from 'react'
import { Heading, Text } from '@chakra-ui/react'

export default function ConfirmPayment() {

    const [order, setOrder] = useState(JSON.parse(localStorage.getItem("orderLocal")))
    console.log(order.order)
    return (
        <div>
            <Heading>¡Muchas gracias por tu compra!</Heading>
            <Text>Aquí podrás encontrar los datos de tu pedido</Text>
            <Text>Productos:</Text>
            {order.order._products.map(item => (
                <Text>{item.title}</Text>
            ))}
        </div>
    )
};