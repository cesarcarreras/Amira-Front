import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthForm} from '@components';
import {Box, useToast} from '@chakra-ui/react';
import handleAsync from '@utils/handleAsync.js';
import useInput from '@hooks/useInput.js';
import { signupEP } from '@services/auth-ws.js';

export default function Signup(props){
    const toast = useToast()

    const name = useInput('')
    const lastName = useInput('')
    const email = useInput('')
    const address = useInput('')
    const password = useInput('')
    const birthday = useInput('')
    const role = useInput('USER')

    const history = useHistory()

    const [loading, setLoading] = useState(false)

    const handleSignup = async e => {
        e.preventDefault()
        setLoading(true)
        const data = {
            name: name.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            birthday: birthday.value,
            address: address.value,
            role: role.value
        }

        const {user} = await handleAsync(() => signupEP(data))

        console.log(user)
        if(user){
            toast({
                position: 'top-right',
                title: "Cuenta creada correctamente",
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
                title: "Error",
                description: "Algo salió mal",
                status: 'error',
                duration: 3000,
                isClosable: true
            })
            setLoading(false)
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
            placeholder : 'Bond',
            type: 'text',
            icon: 'user',
            labelName: 'Apellido',
            control: {...lastName}
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