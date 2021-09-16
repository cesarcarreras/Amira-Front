import React from 'react'
import {Flex, Input, InputGroup, Button, Box} from '@chakra-ui/react'


export default function SignupForm(props){
    const {inputs, actionButton, loading} = props
    return(
        <Flex
            py={5}
            direction="column"
            align="center"
            textAlign="center"
            position="relative"
        >
            <Box as="form" w="100%" d="flex" flexDirection="column">
                {inputs.map((input, index) => (
                    <Box d="flex" w="100%" flexDirection="row" justifyContent="space-around" alignContent="center" alignItems="center" key={index}>
                        <InputGroup w="75%" size="md">
                            <Input
                                {...input.control}
                                type={input.type}
                                color="gray.500"
                                focusBorderColor="blue.500"
                                placeholder={input.placeholder}
                                mb={5}
                                variant="flushed"
                                className="body-font"
                                isRequired
                            />
                        </InputGroup>
                    </Box>
                ))}
                <Button
                    mt={10}
                    onClick={actionButton}
                    isLoading={loading}
                    width="30%"
                    size="lg"
                    backgroundColor="blue.100"
                    variant="solid"
                    type="submit"
                    alignSelf="center"
                    borderColor="white"
                    boxShadow="xl"
                    color="white"
                    className="body-font"
                    borderRadius="30px"
                >Registrarse</Button>
            </Box>
        </Flex>
    )
};