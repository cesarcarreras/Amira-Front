import React, { useEffect, useRef } from 'react';

export default function Paypal(){

    const paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Un jabomsito",
                            amount: {
                                currency_code: "MXN",
                                value: 100.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions,) => {
                const order = await actions.order.capture()
                    console.log("Successful order", )
            },
            onError: (err) => {
                console.log(err)
            }
        }).render(paypal.current)
    }, [])
    return(
        <div>
            <div ref={paypal}/>
        </div>
    )
}