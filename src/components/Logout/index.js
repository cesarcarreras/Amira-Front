import React, {useState, useRef} from 'react'
import {useAuth} from '@utils/AuthContext'
import handleAsync from '@utils/handleAsync'
import {logoutEP} from '@services/auth-ws';
import {useHistory } from 'react-router-dom';
import { AlertDialogContent, Button, AlertDialogFooter, AlertDialogBody, AlertDialogHeader, AlertDialogOverlay, AlertDialog, useToast } from '@chakra-ui/react';

export default function Logout(props) {

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    const [, dispatch] = useAuth()

    const history = useHistory()

    const toast = useToast()

    const logout = async () => {
        await handleAsync(logoutEP)
        dispatch({type: 'LOGOUT'})

        toast({
            position: 'top-right',
            title: "Has cerrado sesión correctamente",
            status: 'success',
            duration: 2000,
        })
        setTimeout(() => {
            history.push('/')
        }, 1000)

        setIsOpen(false)
    }
    return (
        <>
    <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro de quere salir?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={logout} ml={3}>
                Confirmar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        </>
    )
}
