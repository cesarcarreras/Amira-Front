import React from 'react';
import {NavLink} from 'react-router-dom'
import {Box,Text} from '@chakra-ui/react';
import { useAuth } from '../../AuthContext';
import handleAsync from '@utils/handleAsync';
import routes from '../../AuthApp/Routes';
import {logoutEP} from '@services/auth-ws';

export default function MenuRight(){
    const [, dispatch] = useAuth()
    const [user] = useAuth()

    const logout = async () => {
        await handleAsync(logoutEP)
        dispatch({type: 'LOGOUT'})
    }

    const setLinks = () => {
        return routes.map(function({label, path, type}){
            if(type === 'menu')
            return <Box key={path} fontSize={['sm', 'md', 'lg', 'xl']} mt={[3,3,5,5]} mb={[3,3,5,5]}>
            <NavLink activeStyle={{fontWeight: 'bold'}} style={{color:'white'}} exact to={path}>
                {label}
            </NavLink>
        </Box>
        })
    }

    return(
        <Box
        as="nav"
        display="flex"
        flexDirection="column"
        boxSizing="border-box"
        py={10}
        px={[5,5,10,20]}
        h="100vh"
        w="15vw"
        position="fixed"
        left="0"
        textAlign="left"
        boxShadow="xl"
        backgroundColor="blue.900"
    >
        <Box marginBottom="50px">
            <Text color="white">Tiendita de Dylan</Text>
        </Box>
        {setLinks()}

        <Box position="fixed" bottom="0" padding="2%">
            <Box color="white" cursor="pointer" onClick={logout} fontSize={['md', 'lg', 'lg', 'xl']} mb={[3,3,5,10]}>
                Cerrar Sesión
            </Box>
        </Box>
    </Box>
    )
}