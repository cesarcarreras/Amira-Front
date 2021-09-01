import React, {useState} from 'react';
import { Avatar, IconButton, Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { HamburgerIcon, PhoneIcon, SearchIcon, EmailIcon, StarIcon, SettingsIcon, MinusIcon } from '@chakra-ui/icons'
import NavItem from './NavItem';


export default function Sidebar(props){

    const [navSize, changeNavSize] = useState('large')

    return(
        <Flex pos="sticky"
              left="5"
              h="95vh"
              mt="2.5vh"
              boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.5)"
              borderEndEndRadius={navSize === 'small' ? "15px" : "30px"}
              w={navSize === 'small' ? "75px" : "200px"}
              direction="column"
              justifyContent="space-between" >

              <Flex p="5%"
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

                    <NavItem navSize={navSize} icon={PhoneIcon} path="/dashboard/home" title="Home" active description="Esta es la página principal" />
                    <NavItem navSize={navSize} icon={SearchIcon} path="/dashboard/products" title="Products" />
                    <NavItem navSize={navSize} icon={EmailIcon} title="Customers" />
                    <NavItem navSize={navSize} icon={StarIcon} title="Tracker" />
                    <NavItem navSize={navSize} icon={SettingsIcon} path="/dashboard/profile" title="Settings" />
                    <NavItem navSize={navSize} icon={MinusIcon} path="/dashboard/logout" title="Logout" />

              </Flex>

              <Flex p="5%"
                    direction="column"
                    w="100%"
                    alignItems={navSize === 'small' ? "center" : "flex-start"}
                    mb={4} >

                    <Divider display={navSize === 'small' ? "none" : "flex"}/>
                        <Flex mt={4} align="center">
                            <Avatar size="sm" src={props.img}/>
                            <Flex direction="column" ml={4} display={navSize === 'small' ? "none" : "flex"}>
                                <Heading as="h3" size="sm">{props.name}</Heading>
                                <Text color="gray.200">{props.role}</Text>
                            </Flex>
                        </Flex>
              </Flex>
        </Flex>
    )
};