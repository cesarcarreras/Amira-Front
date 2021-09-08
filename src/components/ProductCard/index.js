
import React, {useRef} from 'react'

import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    useColorModeValue,
    useDisclosure,
    Modal,
    ModalContent,
    ModalOverlay,
    ModalFooter,
    Image,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    Badge,
    Container,
    Flex
  } from '@chakra-ui/react';


  export default function ProductCard(props) {

    const {onAdd, product} = props;

    const { isOpen, onOpen, onClose } = useDisclosure()

    const {initialRef, finalRef} = useRef()


    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={product?.img[0]}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {product?.title}
            <Badge ml="1" colorScheme="green">
        New
      </Badge>
          </Heading>
          <Text
            mt={3}
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={1}>
              €{product?.price} EUR
          </Text>

          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              onClick={onOpen}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Ver más
            </Button>

            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Flex justifyContent="center" alignContent="center" alignItems="center">
          <Image src={product?.img} alt="Soap image" borderRadius="full" boxSize="150px" />
          <Container>
          {product?.description}
        </Container>
        </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Comprar
            </Button>
            <Button onClick={onClose}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            <Button
              onClick={() => onAdd(product)}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}>
              Comprar
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }