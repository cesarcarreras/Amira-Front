import { Flex, Menu, MenuButton, Link, Icon, Text, MenuList } from '@chakra-ui/react';
import React from 'react';

export default function NavItem({navSize, icon, title, active, description, path}){
    return(
        <Flex mt={30}
              direction="column"
              w="100%"
              alignItems={ navSize === 'small' ? 'center' : 'Flex-start'}
              >
              <Menu placement="right">
                <Link
                    href={path}
                    backgroundColor={active && "#AEC8CA"}
                    p={3}
                    borderRadius={8}
                    _hover={{textDecor: "none", backgroundColor: "#AEC8CA"}}
                    w={navSize === 'large' && "100%"}
                    >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "gray.500"}/>
                            <Text ml={5} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList py={0}
                          border="none"
                          w={200}
                          h={200}
                          ml={5}>
                </MenuList>
              </Menu>
        </Flex>
    )
};