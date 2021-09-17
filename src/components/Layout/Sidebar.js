import React, {useState} from 'react';
import { Avatar, IconButton, Divider, Flex, Heading, Text, Box } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import {useAuth} from '@utils/AuthContext'
import Routes from '../../AuthApp/Routes'

import { HamburgerIcon, PhoneIcon, AtSignIcon, SunIcon, UpDownIcon, WarningIcon, CloseIcon } from '@chakra-ui/icons'


export default function Sidebar(props){
    const [navSize, changeNavSize] = useState('large')
    const [{user}] = useAuth()

    const setLinks = () =>{
        return Routes.map(function({label, path, type}){
            if(type === 'menu')
            return <Box key={path} fontSize={['sm', 'md', 'lg', 'xl']} mt={[3,3,5,5]} mb={[3,3,5,5]}>
                        <NavLink activeStyle={{fontWeight: 'bold'}} style={{color:'black'}} exact to={path} className="header-font">
                            {
                            navSize === 'small' && label === 'Dashboard' ? <PhoneIcon/> :
                            navSize === 'small' && label === 'Products' ? <AtSignIcon/> :
                            navSize === 'small' && label === 'Clients' ? <SunIcon/> :
                            navSize === 'small' && label === 'Orders' ? <UpDownIcon/> :
                            navSize === 'small' && label === 'Profile' ? <WarningIcon/> :
                            navSize === 'small' && label === 'Logout' ? <CloseIcon/> :
                            label
                            }
                        </NavLink>
                    </Box>
        })
    }

    return(
        <Flex position="fixed"
              w="100%"
              as="nav"
              left="5"
              h="95vh"
              mt="2.5vh"
              boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
              borderEndRadius={navSize === 'small' ? "15px" : "30px"}
              w={navSize === 'small' ? "75px" : "250px"}
              direction="column"
              justifyContent="space-between"
              borderRadius="50px"
               >

              <Flex p="15%"
                    direction="column"
                    w="100%"
                    alignItems={navSize === "small" ? "center" : "flex-start"}
                    as="nav"
                    >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{background:"none"}}
                    icon={<HamburgerIcon />}
                    onClick={() => navSize === 'small' ? changeNavSize('large') : changeNavSize('small')}/>

                    {setLinks()}

              </Flex>

              <Flex p="5%"
                    direction="column"
                    w="100%"
                    alignItems={navSize === 'small' ? "center" : "flex-start"}
                    mb={4} >

                    <Divider display={navSize === 'small' ? "none" : "flex"}/>
                        <Flex mt={4} align="center">
                            <Avatar size="sm" src={user.img}/>
                            <Flex direction="column" ml={4} display={navSize === 'small' ? "none" : "flex"}>
                                <Heading as="h3" size="sm">{user.name}</Heading>
                                <Text color="gray.200">{user.role}</Text>
                            </Flex>
                        </Flex>
              </Flex>
        </Flex>
    )
};