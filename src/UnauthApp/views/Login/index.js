import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthForm} from '@components';
import useInput from '@hooks/useInput.js';
import {Box, useToast} from '@chakra-ui/react';
import { useAuth } from '@utils/AuthContext.js';
import handleAsync from '@utils/handleAsync.js';
import { loginEP } from '@services/auth-ws.js';

export default function Login(props){
    const toast = useToast()
    const [, dispatch] = useAuth()
    const history = useHistory()

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
            toast({
                position: 'top-right',
                title: "Login exitoso",
                status: 'success',
                duration: 3000,
            })
            setLoading(false)
            setTimeout(() => {
                history.push('/dashboard/home')
            }, 1000)
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