import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToast } from "@chakra-ui/react"


export default function Paypal(){

    const history = useHistory()

    const toast = useToast()

    const paypal = useRef()

    const [newOrder, setOrder] = useState(JSON.parse(localStorage.getItem("orderLocal")) || [])

    console.log(newOrder)

    const handleStatusUpdate = () => {

    }

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: `${newOrder._products.length} Jabones de Amira`,
                            amount: {
                                currency_code: "MXN",
                                value: newOrder.total
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions,) => {
                const order = await actions.order.capture()

                toast({
                    title: "Pago completado correctamente",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                    handleStatusUpdate()
                    history.push('/payment-confirmation')
            },
            onError: (err) => {
                console.log(err)
                toast({
                    title: "Pago no ha sido completado",
                    status: "error",
                    duration: 4000,
                    isClosable: true,
                  })
            }
        }).render(paypal.current)
    }, [])
    return(
        <div>
            <div ref={paypal}/>
        </div>
    )
}