import React, {useState} from 'react';
import { useAuth } from '../../AuthContext.js';
import {Box, useToast} from '@chakra-ui/react';
import handleAsync from '../../utils/handleAsync.js';
import { useInput } from '../../hooks/useInput.js';
import { loginEP } from '../../services/auth-ws.js';
import AuthForm from '../../components/AuthForm/index.js';

export default function Login(props){
    const toast = useToast()
    const [, dispatch] = useAuth()

    const email = useInput('')
    const password = useInput('')

    const [loading, setLoading] = useState(false)

    const handleLogin = async e => {
        e.preventDefault()
        setLoading(true)

        const data = {
            email: email.value,
            password: password.value
        }

        const {user} = await handleAsync(() => loginEP(data))

        setLoading(false)
        if(user){
            dispatch({type: 'LOGIN', payload: {user}})
        }else{
            toast({
                position: 'top-right',
                title: "No autorizado",
                description: "Correo o contraseña incorrecta",
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
    };



    const inputs = [

        {
            placeholder : 'James@bond.com',
            type: 'email',
            icon: 'user',
            labelName: 'Correo',
            control: {...email}
        },
        {
            placeholder : '* * * * * * * * ',
            type: 'password',
            icon: 'pwd',
            labelName: 'Contraseña',
            control: {...password}
        }
    ]

    return(
        <Box
            as="main"
            d="flex"
            alignItems="center"
            justifyContent="center"
            boxSizing="border-box"
            w="100%"
            h="85vh"
        >
            <AuthForm
            title={'Iniciar Sesión'}
            buttonText={'Entrar'}
            inputs={inputs}
            actionButton={handleLogin}
            loading={loading}
            />
    </Box>
    )
};