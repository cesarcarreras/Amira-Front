import React, {useState} from 'react';
import AuthForm from '../../components/AuthForm.js/index.js';
import { useAuth } from '../../AuthContext.js';
import {Box, useToast} from '@chakra-ui/react';
import handleAsync from '../../utils/handleAsync.js';
import { useInput } from '../../hooks/useInput.js';
import { signupEP } from '../../services/auth-ws.js';
import { useHistory } from 'react-router-dom';

export default function Signup(props){
    const toast = useToast()
    const [, dispatch] = useAuth()

    const name = useInput('')
    const email = useInput('')
    const password = useInput('')
    const birthday = useInput('')
    const role = useInput('ADMIN')
    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const handleSignup = async e => {
        e.preventDefault()
        setLoading(true)
        const data = {
            name: name.value,
            email: email.value,
            password: password.value,
            birthday: birthday.value
        }

        const {user} = await handleAsync(() => signupEP(data))

        setLoading(false)

        if(user){
            history.push('/')
        }else{
            toast({
                position: 'top-right',
                title: "Error",
                description: "Algo salió mal",
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
    };



    const inputs = [
        {
            placeholder : 'James',
            type: 'text',
            icon: 'user',
            labelName: 'Nombre',
            control: {...name}
        },
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
        },
        {
            placeholder : 'Fecha de Nacimiento',
            type: 'date',
            labelName: 'Fecha de Nacimiento',
            control: {...birthday}
        },

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
            title={'Registrarse'}
            buttonText={'Entrar'}
            inputs={inputs}
            actionButton={handleSignup}
            loading={loading}
            />
        </Box>
    )
}