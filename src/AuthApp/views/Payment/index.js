import { Button } from '@chakra-ui/react';
import React, {useState} from 'react';
import { Paypal } from '@components';


const Payment = () => {

    const [checkout, setCheckout] = useState(false)

    return(
        <>
        <h1>Esta será la página del checkout</h1>
        {checkout ? (
            <Paypal />
           ) : (
            <Button mt={20} onClick={() => setCheckout(true)}>Checkout</Button>
            )
        }
        </>
    )
};

export default Payment;